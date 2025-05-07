import {protectedProcedure, t} from '../../trpc';
import {createTransactionInputSchema} from "@/types/transaction/create";
import {prisma} from "@/lib/prisma";

export const transactionsRouter = t.router({
    create: protectedProcedure
        .input(createTransactionInputSchema)
        .mutation(async ({ctx,input}) => {
            try {
                const userId = ctx.user?.userId;
                console.log(userId);
                const transaction = await prisma.transaction.create({
                    data: {
                        amount: input.amount,
                        date: new Date(input.date),
                        description: input.description,
                        type: input.type,
                        user: {
                            connect: {
                                id: userId,
                            },
                        },
                        category: {
                            connect: {
                                id: input.categoryId,
                            },
                        },
                    },
                });
                return {
                    success: true,
                    transaction: transaction,
                };
            } catch (e) {
                console.log(e?.message);
                return {
                    success: false,
                    message: e?.message,
                }
            }
        }),
})