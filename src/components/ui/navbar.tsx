"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setTheme } = useTheme()

    return (
        <nav className="sticky hrefp-0 w-full bg-white/80 dark:bg-transparent backdrop-blur-md z-50 shadow-sm">
            <div className=" mx-auhref px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold gradient-text">FinanseNest</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/" className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/#features" className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Features
                            </Link>
                            <Link href="/#pricing" className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                Pricing
                            </Link>
                            <Link href="/#faq" className="text-gray-700 dark:text-white hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
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
                </div>
            )}
        </nav>
    );
}
