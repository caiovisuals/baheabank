import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { users, User } from "@/lib/db";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  return remainder === parseInt(cpf.substring(10, 11));
}

export async function POST(req: Request) {
    const { email, password, phone, cpf, pin, rg, fullName, birthDate } = await req.json();

    if (!email || !password || !phone || !cpf || !pin) {
        return NextResponse.json({ error: "Preencha todos os campos obrigatórios" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (!isValidCPF(cpf)) {
        return NextResponse.json({ error: "CPF inválido" }, { status: 400 });
    }

    if (users.find((u) => u.email === email)) {
        return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser: User = {
        id: users.length + 1,
        email: email.toLowerCase(),
        password: hashed,
        phone,
        cpf,
        pin,
        rg,
        fullName: fullName || "",
        birthDate: birthDate ? new Date(birthDate) : new Date(),
        balance: 0,
        createdAt: new Date(),
    };

    users.push(newUser);

    return NextResponse.json({ success: true, user: { id: newUser.id, email: newUser.email } });
}