"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        phone: "",
        cpf: "",
        pin: "",
        rg: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok) setError(data.error || "Erro ao registrar");
        else router.push("/auth/login");
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
                <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Senha" className="w-full p-3 rounded bg-gray-700" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <input type="text" placeholder="Telefone" className="w-full p-3 rounded bg-gray-700" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input type="text" placeholder="CPF" className="w-full p-3 rounded bg-gray-700" value={form.cpf} onChange={(e) => setForm({ ...form, cpf: e.target.value })} />
                <input type="text" placeholder="PIN" className="w-full p-3 rounded bg-gray-700" value={form.pin} onChange={(e) => setForm({ ...form, pin: e.target.value })} />
                <input type="text" placeholder="RG (opcional)" className="w-full p-3 rounded bg-gray-700" value={form.rg} onChange={(e) => setForm({ ...form, rg: e.target.value })} />
                <button type="submit" disabled={loading} className="w-full bg-blue-600 py-3 rounded hover:bg-blue-500">
                {loading ? "Registrando..." : "Registrar"}
                </button>
            </form>
        </div>
    );
}