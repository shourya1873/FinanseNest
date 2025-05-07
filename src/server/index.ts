import { t } from './trpc';
import {userRouter} from "@/server/routers/user";
import {transactionsRouter} from "@/server/routers/transaction";

export const appRouter = t.router({
    user: userRouter,
    transaction: transactionsRouter
});

export type AppRouter = typeof appRouter;
