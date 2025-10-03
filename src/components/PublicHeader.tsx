"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PublicHeader() {
    const router = useRouter();

    async function handleAccessAccount() {
        try {
            const res = await fetch("/api/me", { credentials: "include" });
            if (res.ok) {
                router.push("/dashboard");
            } else {
                router.push("/login");
            }
        } catch (err) {
            console.error(err);
            router.push("/login");
        }
    }

    return (
        <header className="px-10 py-6 flex justify-between items-center">
            <Link href="/" className="w-[22%]">
                logo
            </Link>
            <div className="w-[54%] flex items-center justify-center">
                <nav className="flex flex-row items-center justify-center gap-8 whitespace-nowrap">
                    <a href="/products/account">Conta</a>
                    <a href="/products/piggys">Porquinho</a>
                    <a href="/products/cards">Cartão de Crédito</a>
                    <a href="/products/loans">Empréstimos e Financiamentos</a>
                    <a href="/products/investments">Investimentos</a>
                    <a href="/products/machine">Maquininha</a>
                </nav>
            </div>
            <div className="w-[22%] flex flex-row items-center gap-6 justify-end">
                <Link href="/register" className="cursor-pointer">
                    <button className="cursor-pointer">
                        Abra sua conta
                    </button>
                </Link>
                <button onClick={handleAccessAccount} className="cursor-pointer">
                    Acesse sua conta
                </button>
            </div>
        </header>
    )
}