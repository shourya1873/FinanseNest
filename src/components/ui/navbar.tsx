"use client"
import {useState} from "react";
import {Button, buttonVariants} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import Link from "next/link";
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {useCustomerStore} from "@/store/useCustomerStore";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {setTheme} = useTheme()
    const {customer, clearCustomer} = useCustomerStore();
    const router = useRouter();

    const logout = async () => {
        await fetch("/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        clearCustomer();
        toast.success("Logout successful!");
        router.push("/dashboard");
    }

    return (
        <nav className="sticky hrefp-0 w-full bg-white/80 dark:bg-transparent backdrop-blur-md z-50 shadow-sm">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold gradient-text">FinanseNest</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/"
                                  className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/#features"
                                  className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Features
                            </Link>
                            <Link href="/#pricing"
                                  className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Pricing
                            </Link>
                            <Link href="/#faq"
                                  className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    {!customer?.userId ? (
                        <div className="hidden xl:flex gap-2">
                            <Link
                                href="/sign-up"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "default" }),
                                    "w-full bg-finanse-primary text-white"
                                )}
                            >
                                Sign up
                            </Link>
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "default" }),
                                    "w-full text-finanse-primary"
                                )}
                            >
                                Log In
                            </Link>
                        </div>
                    ) : (
                        <div className="hidden xl:flex gap-2">
                            <Button
                                variant="outline"
                                size="default"
                                className="w-full cursor-pointer bg-finanse-primary text-white"
                                onClick={logout}
                            >
                                Log out
                            </Button>
                        </div>
                    )}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun
                                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                <Moon
                                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="md:hidden">
                        <Button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-finanse-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6"/> : <Menu className="block h-6 w-6"/>}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-transparent shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#features"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#pricing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/#faq"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-3 py-2 rounded-md text-base font-medium bg-finanse-primary text-white hover:bg-finanse-primary/90"
                        >
                            Dashboard
                        </Link>
                    </div>
                    {!customer?.userId ? (
                        <div className="flex flex-col gap-2 px-2 md:px-0">
                            <Link
                                href="/sign-up"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "default" }),
                                    "w-full bg-finanse-primary text-white"
                                )}
                            >
                                Sign up
                            </Link>
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "default" }),
                                    "w-full text-finanse-primary"
                                )}
                            >
                                Log In
                            </Link>
                        </div>
                    ) : (
                        <div className="flex px-2 md:px-0 gap-2">
                            <Button
                                variant="outline"
                                size="default"
                                className="w-full cursor-pointer bg-finanse-primary text-white"
                                onClick={logout}
                            >
                                Log out
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
