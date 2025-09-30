import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { users } from "@/lib/db";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req: Request) {
    const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];
    if (!token) return NextResponse.json({ user: null });

    try {
        const { payload } = await jwtVerify(token, SECRET);
        const user = users.find(u => u.id === payload.id);
        return NextResponse.json({ user: user ? { id: user.id, email: user.email } : null });
    } catch {
        return NextResponse.json({ user: null });
    }
}
