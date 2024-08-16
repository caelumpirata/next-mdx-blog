import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caelum Pirata",
  description: "SWE",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
    lang="en"
    className={`${inter.className} antialiased`}
  >
    <body className="dark:text-gray-100 max-w-2xl m-auto">
      <main className="p-6 pt-3 md:pt-6 min-h-screen">
      <Header />

        {children}
      </main>
    </body>
  </html>
  );
}
