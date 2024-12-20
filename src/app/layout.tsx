import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@components/shad.ui/sonner";

import ReactQueryProvider from "src/libs/providers/ReactQueryProvider";
import NextAuthProvider from "@libs/providers/NextAuthProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Sharehood",
  description: "Sharehood is a platform for sharing items",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <main className="bg-defaultBackground mx-auto min-h-screen max-w-screen-sm">
              {children}
            </main>
            <Toaster />
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
