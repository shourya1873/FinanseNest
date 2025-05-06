import { publicProcedure, t } from '../../trpc';
import bcrypt from "bcryptjs";
import {prisma} from "@/lib/prisma";

export const transactionsRouter = t.router({
    create: publicProcedure
        .mutation(async ({input}) => {

        }),
})