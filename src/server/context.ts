// server/trpc/context.ts
import jwt from "jsonwebtoken"; // your JWT parsing logic
import { cookies } from "next/headers";

export async function createContext({ req, res }: { req: Request; res: Response }) {
    const cookieStore = await cookies();
    const token = cookieStore?.get("auth_token")?.value;
    const user = token ? jwt.verify(token, process.env.JWT_SECRET!) : null; // replace with your verify function

    return {
        req,
        res,
        user,
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
