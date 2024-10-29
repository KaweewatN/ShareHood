import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@libs/providers/ReactQueryProvider";

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
        <ReactQueryProvider>
          <div className="bg-defaultBackground mx-auto min-h-screen max-w-screen-sm">
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
