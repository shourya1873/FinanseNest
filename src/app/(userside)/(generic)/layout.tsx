import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../../globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {Navbar} from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import {TRPCProvider} from "@/app/trpc-provider";
import {Toaster} from "react-hot-toast";

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

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {

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
                <Navbar/>
                {children}
                <Footer/>
            </TRPCProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
