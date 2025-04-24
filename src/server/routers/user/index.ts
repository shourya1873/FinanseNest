import { publicProcedure, t } from '../../trpc';
import {signUpInputSchema} from "@/types/user/signup";
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import {loginInputSchema} from "@/types/user/login";
import jwt from "jsonwebtoken";

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
    login: publicProcedure
        .input(loginInputSchema)
        .mutation(async ({ input }) => {
            const user = await prisma.user.findFirst({ where: { email: input.email } });

            if (!user?.id) {
                throw new Error("User does not exist");
            }

            const isPasswordMatch = await bcrypt.compare(input.password, user.password);

            if (!isPasswordMatch) {
                return { success: false, message: "Invalid credentials" };
            }

            const jwtToken = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET!,
                { expiresIn: "1d" }
            );

            return {
                success: true,
                message: "Login successful",
                userData: { userId: user.id, email: user.email, name: user.name },
                token: jwtToken, // return it to be set by frontend
            };
        })

});
