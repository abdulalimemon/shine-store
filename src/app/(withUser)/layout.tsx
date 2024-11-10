import UserSidebar from "@/components/component/user/UserSidebar";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Dashboard | Shine Store",
  description:
    "Discover top-quality cleaning supplies at Shine Store. Explore our wide range of products, including dish soaps, surface cleaners, and more. Shop now for a sparkling clean home!",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar session={session} />
      <section className="py-10">
        <Container>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="hidden md:flex flex-col space-y-4 md:w-1/4 border  rounded-md">
              <UserSidebar />
            </div>
            <div className="hidden md:flex flex-col space-y-4 border rounded-md w-full lg:w-3/4">
              <div className="flex flex-col">{children}</div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
