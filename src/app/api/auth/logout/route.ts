import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
    // Clear the cookie by setting it to an empty value and expired
    const cookie = serialize("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(0), // Expire it immediately
        sameSite: "lax",
    });

    const response = NextResponse.json({ success: true, message: "Logged out successfully" });
    response.headers.set("Set-Cookie", cookie);

    return response;
}
