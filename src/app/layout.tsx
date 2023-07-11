import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ContextProvider } from "@/components/context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Racer",
  description: "Accelerating coding skills, competitive thrills!",
  icons: {
    icon: "/static/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <ContextProvider>
          <Header />
          {children}
          <Footer />
          <TailwindIndicator />
        </ContextProvider>
      </body>
    </html>
  );
}
