"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Porquinhos", href: "/piggys" },
        { label: "Finanças", href: "/loans" },
        { label: "Configurações", href: "/settings" },
        { label: "Ajuda", href: "/assistance" },
    ];

    return (
        <aside className="w-full h-25 md:w-64 md:h-full bg-blue-600 text-white flex flex-row md:flex-col items-center md:items-start jutify-center md:justify-between p-6">
            <div className="flex md:w-full flex-row md:flex-col items-center md:items-start gap-5">
                <div className="text-2xl font-bold md:mb-5">Baheabank</div>
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
            <div>Conta</div>
        </aside>
    )
}