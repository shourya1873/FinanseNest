import { z } from 'zod';

export const signUpInputSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export type SignUpInputSchema = z.infer<typeof signUpInputSchema>;
