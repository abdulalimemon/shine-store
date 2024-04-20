"use client";

import { Button } from "@/components/ui/button";
import Container from "../Container";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { UserProps } from "@/type";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";

const Navbar = ({ session }: { session: UserProps | null }) => {
  const { setTheme } = useTheme();
  return (
    <section className="bg-slate-100 dark:bg-slate-900 border-b">
      <Container>
        <nav className="flex items-center justify-between py-2">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 lg:mx-0 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <Link href="/">
              <h2>Shine Store</h2>
            </Link>
          </div>
          <ul className="hidden font-semibold items-center justify-between gap-10 lg:flex">
            <li className="group flex  cursor-pointer flex-col">
              Home
              <span className="navUnderline"></span>
            </li>

            <li className="group flex cursor-pointer flex-col">
              <Link href="/cleaning-supplies">Products</Link>
              <span className="navUnderline"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              <Link href="/flash-sale">Flash Sale</Link>
              <span className="navUnderline"></span>
            </li>

            {session?.user && (
              <li className="group flex  cursor-pointer flex-col">
                <Link href="/dashboard">Dashboard</Link>
                <span className="navUnderline"></span>
              </li>
            )}

            <li className="group flex cursor-pointer flex-col">
              <Sun
                className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
              <Moon
                className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                onClick={() => setTheme("light")}
              />
            </li>

            <li className="group flex  cursor-pointer flex-col">
              {session?.user ? (
                <Button onClick={() => signOut()}>Logout</Button>
              ) : (
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </li>
          </ul>
          <div className="lg:hidden flex items-center justify-center">
            <div className="group flex cursor-pointer flex-col mr-4">
              <Sun
                className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
              <Moon
                className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                onClick={() => setTheme("light")}
              />
            </div>
            <MobileNav session={session} />
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
