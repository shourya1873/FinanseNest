import React from 'react';
import {ThemeProvider} from "@/components/theme-provider";
import {TRPCProvider} from "@/app/trpc-provider";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/ui/footer";
import {Geist, Geist_Mono} from "next/font/google";
import type {Metadata} from "next";
import DashboardNavbar from "@/components/ui/DashboardNavbar";
import "@/app/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FinanseNest",
    description: "Manage your finances with FinanseNest",
};

const DashboardLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TRPCProvider>
                <Toaster/>
                <DashboardNavbar/>
                {children}
                <Footer/>
            </TRPCProvider>
        </ThemeProvider>
        </body>
        </html>
    );
};

export default DashboardLayout;