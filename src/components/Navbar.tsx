"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/private/dashboard" },
        { label: "Configurações", href: "/private/settings" },
    ];

    return (
        <aside className="w-64 h-screen bg-blue-600 text-white flex flex-col p-6">
            <div className="text-2xl font-bold mb-10">Baheabank</div>
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`p-3 rounded hover:bg-blue-500 transition ${
                    pathname === item.href ? "bg-blue-500 font-semibold" : ""
                    }`}
                >
                    {item.label}
                </Link>
                ))}
            </nav>
        </aside>
    )
}