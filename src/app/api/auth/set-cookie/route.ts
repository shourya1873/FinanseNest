import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
    const { token } = await request.json();

    if (!token) {
        return NextResponse.json({ error: "Token missing" }, { status: 400 });
    }

    const cookie = serialize("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
    });

    const response = NextResponse.json({ success: true, message: "Cookie set" });
    response.headers.set("Set-Cookie", cookie);

    return response;
}
