import { z } from 'zod';

export const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type HelloInput = z.infer<typeof loginInputSchema>;
