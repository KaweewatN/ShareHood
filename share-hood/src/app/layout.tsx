import React from "react";
import {startImage} from "@libs/pwa/startImage";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@components/shad.ui/sonner";

import ReactQueryProvider from "src/libs/providers/ReactQueryProvider";
import NextAuthProvider from "@libs/providers/NextAuthProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Sharehood",
  description: "Sharehood is a platform for sharing items",
  icons: {
    icon: [{url: "/logo/app-logo.png", sizes: "196x196", type: "image/png"}],
    apple: [{url: "/logo/app-logo.png"}],
  },
  appleTouchIcon: "/logo/app-logo.png",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    startupImage: startImage,
  },
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
