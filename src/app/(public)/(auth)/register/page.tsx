"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function formatCPF(value: string) {
    value = value.replace(/\D/g, "");
    if (value.length <= 11) {
        return value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return value;
}

function formatPhone(value: string) {
    value = value.replace(/\D/g, "");
    if (value.length <= 11) {
        return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value;
}

function isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

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

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        phone: "",
        cpf: "",
        pin: "",
        rg: "",
        fullName: "",
        birthDate: new Date(),
        balance: 0,
        createdAt: new Date(),
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!isValidPassword(form.password)) {
            setError("A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas, número e símbolo");
            setLoading(false);
            return;
        }

        if (!isValidEmail(form.email)) {
            setError("Email inválido");
            setLoading(false);
            return;
        }

        if (!isValidCPF(form.cpf)) {
            setError("CPF inválido");
            setLoading(false);
            return;
        }

        if (form.pin.length !== 4) {
            setError("O PIN deve ter exatamente 4 dígitos");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) setError(data.error || "Erro ao registrar");
            else router.push("/dashboard");
        } catch {
            setError("Erro de rede");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl w-full max-w-md space-y-4 shadow-lg">
                <h1 className="text-2xl font-bold text-blue-400 mb-4">Registrar</h1>
                {error && <p className="text-red-500">{error}</p>}
                <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700" 
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Senha" className="w-full p-3 rounded bg-gray-700" 
                value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <input type="text" placeholder="Telefone" className="w-full p-3 rounded bg-gray-700" 
                value={form.phone} onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })} />
                <input type="text" placeholder="CPF" className="w-full p-3 rounded bg-gray-700" 
                value={form.cpf} onChange={(e) => setForm({ ...form, cpf: formatCPF(e.target.value) })} />
                <input type="text" placeholder="PIN" className="w-full p-3 rounded bg-gray-700" 
                value={form.pin} onChange={(e) => setForm({ ...form, pin: e.target.value.replace(/\D/g, "").slice(0, 4) })} />
                <input type="text" placeholder="RG (opcional)" className="w-full p-3 rounded bg-gray-700" 
                value={form.rg} onChange={(e) => setForm({ ...form, rg: e.target.value.replace(/\D/g, "") })} />
                <button type="submit" disabled={loading} className="w-full bg-blue-600 py-3 rounded hover:bg-blue-500">
                    {loading ? "Registrando..." : "Registrar"}
                </button>
                <button
                type="button"
                onClick={() => router.push("/login")}
                className="py-1.5 px-3 rounded bg-gray-600 hover:bg-gray-500"
                >
                Já tem conta?
                </button>
            </form>
        </div>
    );
}