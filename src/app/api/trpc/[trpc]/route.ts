import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server'; // Use relative import if alias fails
import { createContext } from "@/server/context";

const handler = (req: Request) => {
    console.log("🔧 tRPC route hit:", req.method, req.url);
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext,
    });
};

export { handler as GET, handler as POST }; // Required for tRPC
