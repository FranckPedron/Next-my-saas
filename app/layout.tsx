import type {Metadata} from "next";
import "./globals.css";
import Nav from "@/app/components/Nav";
import {ThemeProvider} from "@/app/components/Theme-provider";
import {SessionProvider} from "next-auth/react";

export const metadata: Metadata = {
    title: "My saas",
    description: "My personnal saas",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
            <SessionProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <Nav/>
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </body>
        </html>
    );
}
