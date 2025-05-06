'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {loginInputSchema} from "@/types/user/login";
import { z } from "zod"
import {trpc} from "@/server/client";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useCustomerStore} from "@/store/useCustomerStore";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { setCustomer } = useCustomerStore();

    const form = useForm<z.infer<typeof loginInputSchema>>({
        resolver: zodResolver(loginInputSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const login = trpc.user.login.useMutation();

    async function onSubmit(values: z.infer<typeof loginInputSchema>) {
        setLoading(true);
        try {
            const result = await login.mutateAsync(values);
            if (result?.success) {
                await fetch("/api/auth/set-cookie", {
                    method: "POST",
                    body: JSON.stringify({ token: result?.token }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                useCustomerStore.getState().setCustomer(result?.userData);
                toast.success("Login successful!");
                router.push("/dashboard");
            } else {
                toast.error(result?.message);
            }
        } catch (err) {
            console.error('Signup error:', err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-transparent py-12 px-4">
            <Card className="max-w-md w-full space-y-4 p-8 rounded-2xl shadow-lg border-0 bg-white">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-3xl font-bold gradient-text dark:text-black">FinanseNest</div>
                    <div className="mt-1 text-lg text-gray-700 font-medium">Login to your account</div>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type={'password'} placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className={'bg-finanse-primary text-white w-full cursor-pointer'} disabled={loading}>Submit</Button>
                    </form>
                </Form>

                <div className="text-center text-sm text-gray-500 mt-3">
                    Don&#39;t have an account?{" "}
                    <Link href="/sign-up" className="text-[#875CFF] hover:underline font-medium">
                        Sign up
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;