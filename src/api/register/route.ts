import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { users, User } from "@/lib/db";

export async function POST(req: Request) {
    const { email, password, phone, cpf, pin, rg } = await req.json();

    if (!email || !password || !phone || !cpf || !pin) {
        return NextResponse.json({ error: "Preencha todos os campos obrigatórios" }, { status: 400 });
    }

    if (users.find((u) => u.email === email)) {
        return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser: User = {
        id: users.length + 1,
        email,
        password: hashed,
        phone,
        cpf,
        pin,
        rg,
        createdIn: new Date(),
    };

    users.push(newUser);

    return NextResponse.json({ success: true, user: { id: newUser.id, email: newUser.email } });
}