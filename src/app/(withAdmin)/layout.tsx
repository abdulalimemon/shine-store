import type { Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AdminNavbar from "@/components/component/admin/AdminNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Admin | Shine Store",
  description:
    "Discover top-quality cleaning supplies at Shine Store. Explore our wide range of products, including dish soaps, surface cleaners, and more. Shop now for a sparkling clean home!",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <SidebarProvider>
        <AppSidebar session={session} />
        <SidebarInset>
          <AdminNavbar session={session} />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
