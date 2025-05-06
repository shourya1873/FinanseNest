'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Bell,
    LayoutDashboard,
    CreditCard,
    BarChart3,
    Settings,
    Menu,
    X,
    User, Sun, Moon
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { NotificationsDialog } from "./NotificationsDialog";
import {useTheme} from "next-themes";
import {useCustomerStore} from "@/store/useCustomerStore";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const DashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {setTheme} = useTheme()
    const {customer, clearCustomer} = useCustomerStore();
    const router = useRouter();
    const pathname = usePathname();

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
        <nav className="sticky top-0 w-full bg-white/80 dark:bg-transparent backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold gradient-text">FinanseNest</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <Link href="/dashboard" className={`text-gray-400 hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname === "/dashboard" ? "font-bold text-finanse-primary" : ""}`}>
                                    <LayoutDashboard className="h-4 w-4 mr-1" /> Dashboard
                                </Link>
                                <Link href="/transactions" className={`text-gray-400 hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname === "/transactions" ? "font-bold text-finanse-primary" : ""}`}>
                                    <CreditCard className="h-4 w-4 mr-1" /> Transactions
                                </Link>
                                <Link href="/reports" className={`text-gray-400 hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname === "/reports" ? "font-bold text-finanse-primary" : ""}`}>
                                    <BarChart3 className="h-4 w-4 mr-1" /> Reports
                                </Link>
                                <Link href="/myaccount" className={`text-gray-400 hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname === "/myaccount" ? "font-bold text-finanse-primary" : ""}`}>
                                    <User className="h-4 w-4 mr-1" /> My Account
                                </Link>
                                <Link href="/settings" className={`text-gray-400 hover:text-finanse-primary px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname === "/settings" ? "font-bold text-finanse-primary" : ""}`}>
                                    <Settings className="h-4 w-4 mr-1" /> Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/*<NotificationsDialog />*/}
                            <Button variant="ghost" size="icon" className="rounded-full mr-2">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full mr-4">
                                <Settings className="h-5 w-5" />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                        <AvatarFallback>
                                            <User className="h-5 w-5" />
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem
                                        className=""
                                    >
                                        Hey {customer?.name}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={logout} className="text-red-600">
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
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
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-finanse-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-transparent shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/dashboard"
                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-100 ${pathname === "/dashboard" ? "font-bold text-finanse-primary" : ""}`}
                        >
                            <LayoutDashboard className="h-5 w-5 mr-2" /> Dashboard
                        </Link>
                        <Link
                            href="/transactions"
                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-100 ${pathname === "/transactions" ? "font-bold text-finanse-primary" : ""}`}
                        >
                            <CreditCard className="h-5 w-5 mr-2" /> Transactions
                        </Link>
                        <Link
                            href="/reports"
                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-100 ${pathname === "/reports" ? "font-bold text-finanse-primary" : ""}`}
                        >
                            <BarChart3 className="h-5 w-5 mr-2" /> Reports
                        </Link>
                        <Link
                            href="/myaccount"
                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-100 ${pathname === "/myaccount" ? "font-bold text-finanse-primary" : ""}`}
                        >
                            <User className="h-5 w-5 mr-2" /> My Account
                        </Link>
                        <Link
                            href="/settings"
                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-100 ${pathname === "/settings" ? "font-bold text-finanse-primary" : ""}`}
                        >
                            <Settings className="h-5 w-5 mr-2" /> Settings
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center px-5 gap-3 cursor-pointer">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                        <AvatarFallback>
                                            <User className="h-5 w-5" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-left">
                                        <div className="text-base font-medium text-gray-800">
                                            {customer?.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            {customer?.email}
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem
                                    className=""
                                >
                                    Hey {customer?.name}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={logout}
                                    className="text-red-600"
                                >
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default DashboardNavbar;