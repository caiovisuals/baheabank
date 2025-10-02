"use client";


import { useEffect, useState } from "react";
import { Piggy } from "@/lib/db";

export default function Piggys() {
    const [piggys, setPiggys] = useState<Piggy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPiggys() {
        try {
            const res = await fetch("/api/user/piggys", {
            credentials: "include",
            });
            if (res.ok) {
            const data = await res.json();
            setPiggys(data);
            } else {
            console.error("Erro ao buscar piggys");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
        }
        fetchPiggys();
    }, []);

    return (
        <div className="p-8 flex flex-col size-full">
            <h1 className="text-3xl font-bold mb-6">Meus Porquinhos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {piggys.map((piggy) => {
                const progress = piggy.goal ? Math.min((piggy.value / piggy.goal) * 100, 100) : 0;

                return (
                    <div
                    key={piggy.id}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
                    >
                    <h2 className="text-lg font-semibold mb-2">{piggy.name}</h2>
                    <p className="text-gray-600 mb-2">
                        R$ {piggy.value.toFixed(2)} {piggy.goal ? `/ R$ ${piggy.goal.toFixed(2)}` : ""}
                    </p>

                    {piggy.goal && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                        </div>
                    )}

                    <button className="mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                        Ver detalhes
                    </button>
                    </div>
                );
                })}

                <div className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer">
                    <button className="text-blue-500 font-semibold border border-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition">
                        + Criar novo confrinho
                    </button>
                </div>
            </div>
        </div>
    );
}