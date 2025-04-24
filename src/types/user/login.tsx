import { z } from 'zod';

export const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type LoginInputSchema = z.infer<typeof loginInputSchema>;
