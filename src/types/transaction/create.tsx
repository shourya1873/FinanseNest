import { z } from 'zod';


export const createTransactionInputSchema = z.object({
    categoryId: z.number(),
    amount: z.number(),
    date: z.string().datetime(),
    description: z.string().nullable(),
    type: z.enum(["INCOME", "EXPENSE"]),
});

export type CreateTransactionInputSchema = z.infer<typeof createTransactionInputSchema>;
