import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/lib/Providers";
import BackToTop from "@/components/layout/main/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shine Store | Your Destination for Premium Cleaning Supplies",
  description:
    "Discover top-quality cleaning supplies at Shine Store. Explore our wide range of products, including dish soaps, surface cleaners, and more. Shop now for a sparkling clean home!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Navbar session={session} />
            {children}
            <Toaster />
            <BackToTop />
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
