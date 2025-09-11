import { NextResponse } from "next/server";

let balance = 2450;

export async function GET() {
    return NextResponse.json({ balance });
}

export async function POST(req: Request) {
    const { value, type } = await req.json();

    if (type === "entrada") balance += value;
    if (type === "saida") balance -= value;

    return NextResponse.json({ balance });
}