import { t } from './trpc';
import {userRouter} from "@/server/routers/user";

export const appRouter = t.router({
    user: userRouter
});

export type AppRouter = typeof appRouter;
