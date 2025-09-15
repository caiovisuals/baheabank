import { NextResponse } from "next/server";
import { users, Transaction } from "@/lib/db";

export async function GET(req: Request) {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("token=")[1]?.split(";")[0];
}

export async function POST(req: Request) {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("token=")[1]?.split(";")[0];
}