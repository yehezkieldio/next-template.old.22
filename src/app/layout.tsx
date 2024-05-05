import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "next-template",
    description: "A personal/opinionated bleeding edge Next.js template that I use for my projects, based around the T3 Stack.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("dark min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <TRPCReactProvider>
                    {children}
                </TRPCReactProvider>
            </body>
        </html>
    );
}
