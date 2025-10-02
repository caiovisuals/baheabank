"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@/lib/db";

export default function Navbar() {
    const pathname = usePathname();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchUser() {
        try {
            const res = await fetch("/api/me", { credentials: "include" });
            if (res.ok) {
            const data = await res.json();
            setUser(data);
            }
        } catch (err) {
            console.error("Erro ao buscar usuário:", err);
        }
        }
        fetchUser();
    }, []);

    const navItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Porquinhos", href: "/piggys" },
        { label: "Finanças", href: "/loans" },
        { label: "Configurações", href: "/settings" },
        { label: "Ajuda", href: "/assistance" },
    ];

    return (
        <aside className="w-full h-25 md:w-64 md:h-full bg-blue-600 text-white flex flex-row md:flex-col items-center md:items-start jutify-center md:justify-between p-6 gap-6">
            <div className="flex md:w-full flex-row md:flex-col items-center md:items-start gap-5">
                <nav className="flex flex-row md:flex-col md:w-full gap-2">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={`p-3 md:w-full rounded hover:bg-blue-500 transition ${
                            pathname === item.href ? "bg-blue-500 font-semibold" : ""
                        }`}
                        >
                        {item.label}
                    </Link>
                    ))}
                </nav>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <img src={user?.avatarUrl || "/default-avatar.png"} alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-white"></img>
                <div className="flex flex-col items-start justify-center">
                    <span className="leading-tight">{user?.fullName || "Nome do usuário"}</span>
                    <p className="text-[14px] leading-tight">{user?.email || "Email do usuário"}</p>
                </div>
            </div>
        </aside>
    )
}