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
        <div className="flex p-8 size-full">
            <div>                
                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Salvar
                </button>
            </div>
        </div>
    )
}