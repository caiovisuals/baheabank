"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
    const [balance, setBalance] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/user/balance")
        .then((res) => res.json())
        .then((data) => {
            setBalance(typeof data.balance === "number" ? data.balance : 0);
        })
        .finally(() => setLoading(false));
    }, []);

    const formatCurrency = (value: number | null) => {
        if (value === null) return "0,00";
        return value.toFixed(2).replace(".", ",");
    };

    return (
        <div>
            <div className="p-6 rounded shadow flex justify-between items-center">
                <div>
                    <p className="">Saldo disponível</p>
                    <p className="text-2xl font-bold">R$ {formatCurrency(balance)}</p>
                </div>
            </div>
        </div>
    )
}