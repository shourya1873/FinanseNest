import { publicProcedure, t } from '../../trpc';
import {signUpInputSchema} from "@/types/user/signup";
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const userRouter = t.router({
    signup: publicProcedure
        .input(signUpInputSchema)
        .mutation(async ({input}) => {
            const hashedPassword = await bcrypt.hash(input.password, 10);
            const user = await prisma.user.create({
                data: {
                    email: input.email,
                    name: input.name,
                    password: hashedPassword,
                },
            });
            return {
                success: true,
                userId: user.id,
            };

        }),
});
