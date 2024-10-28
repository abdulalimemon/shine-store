import type { Metadata } from "next";
import DashboardSidebar from "@/app/(withUser)/user/DashboardSidebar";

export const metadata: Metadata = {
  title: "Dashboard | Shine Store",
  description:
    "Discover top-quality cleaning supplies at Shine Store. Explore our wide range of products, including dish soaps, surface cleaners, and more. Shop now for a sparkling clean home!",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      {children}
    </div>
  );
}
