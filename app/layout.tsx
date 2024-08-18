import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";


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
<body className="dark:text-gray-100 max-w-3xl m-auto py-4  px-2 md:pt-[8rem] pt-[8rem] min-h-screen">   
   <Header />
      <main>
        {children}
        {/* <Footer /> */}
      </main>
    </body>
  </html>
  );
}
