"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
    const [balance, setBalance] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/user/balance")
        .then((res) => res.json())
        .then((data) => {
            setBalance(data.balance);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <div className="p-6 rounded shadow flex justify-between items-center">
                <div>
                    <p className="">Saldo disponível</p>
                    <p className="text-2xl font-bold">R$ {balance.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}