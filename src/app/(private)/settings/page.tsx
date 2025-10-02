"use client";

import { useEffect, useState } from "react";
import { User } from "@/lib/db";

export default function Settings() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ fullName: "", email: "", phone: "" });

    const userId = 1;

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch(`/api/user/settings?userId=${userId}`);
            const data = await res.json();
            setUser(data);
            setForm({ fullName: data.fullName, email: data.email, phone: data.phone });
            setLoading(false);
        }
        fetchUser();
    }, []);

    async function handleSave() {
        const res = await fetch("/api/user/settings", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, ...form }),
        });
        const updatedUser = await res.json();
        setUser(updatedUser);
    }

    return (
        <div className="flex flex-col p-8 size-full gap-8">
            <div className="flex items-center justify-start">
                <div className="flex flex-row gap-4 justify-center items-center">
                    <img src={user?.avatarUrl || "/default-avatar.png"} alt="Avatar" className="size-20 rounded-full object-cover" draggable="false"></img>
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-2xl font-semibold leading-tight">{user?.fullName || "Nome do usuário"}</span>
                        <p className="text-lg leading-tight">{user?.email || "Email do usuário"}</p>
                    </div>
                </div>
            </div>
            <div>                
                <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600 transition cursor-pointer">
                    Salvar
                </button>
            </div>
        </div>
    )
}