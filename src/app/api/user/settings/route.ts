import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { users, User } from "@/lib/db";

export async function GET(req: NextRequest) {
    const userId = Number(req.nextUrl.searchParams.get("userId"));
    if (!userId) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

    const user = users.find(u => u.id === userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);
}

export async function PATCH(req: NextRequest) {
    const { userId, fullName, email, phone } = await req.json();
    if (!userId) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (fullName) users[userIndex].fullName = fullName;
    if (email) users[userIndex].email = email;
    if (phone) users[userIndex].phone = phone;

    return NextResponse.json(users[userIndex]);
}
