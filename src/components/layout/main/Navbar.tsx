"use client";

import { Button } from "@/components/ui/button";
import Container from "../Container";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { UserProps } from "@/type";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { getUserInfo, removeUser } from "@/utils/auth.services";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navbar = ({ session }: { session: UserProps | null }) => {
  const { setTheme } = useTheme();
  const userInfo = getUserInfo();
  const router = useRouter();
  const products = useAppSelector((store) => store.cart.products);

  const handleLogOut = () => {
    removeUser();
    signOut();
    router.refresh();
  };

  console.log(session);
  return (
    <section className="bg-slate-100 dark:bg-[#010313] border-b">
      <Container>
        <nav className="flex items-center justify-between py-2">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 lg:mx-0 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <Link href="/">
              <h2>Shine Store</h2>
            </Link>
          </div>
          <ul className="hidden font-semibold items-center justify-between gap-10 lg:flex">
            <li className="group flex cursor-pointer flex-col">
              <Link href="/">Home</Link>
              <span className="navUnderline"></span>
            </li>

            <li className="group flex cursor-pointer flex-col">
              <Link href="/products">Products</Link>
              <span className="navUnderline"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              <Link href="/flash-sale">Flash Sale</Link>
              <span className="navUnderline"></span>
            </li>

            <div className="flex gap-5 items-center justify-center">
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

              <li className="relative group flex cursor-pointer flex-col">
                <Link href="/cart">
                  <ShoppingCart className="size-[1.25rem]" />
                  <span className="rounded-full absolute text-xs top-[-10px] left-[15px] bg-[#265450] text-white flex items-center justify-center size-[1.25rem]">
                    {products.length}
                  </span>
                </Link>
              </li>
            </div>

            <li className="group flex  cursor-pointer flex-col">
              {session?.user || userInfo?.email ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="border-2 rounded-full p-2 border-[#265450]">
                        <Image
                          src="/user.png"
                          width={20}
                          height={20}
                          className="size-5 cursor-pointer"
                          alt="user"
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-4">
                      <DropdownMenuLabel className="text-center">
                        {session?.user?.name || userInfo?.name}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup className="cursor-pointer">
                        <Link href="/admin/profile">
                          <DropdownMenuItem className="cursor-pointer">
                            Profile
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/admin/profile">
                          <DropdownMenuItem className="cursor-pointer">
                            Profile
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="cursor-pointer">
                          Settings
                        </DropdownMenuItem>
                      </DropdownMenuGroup>

                      <div className="p-2">
                        <Button
                          onClick={handleLogOut}
                          className="bg-[#265450] w-full hover:bg-[#265450]/90 text-white cursor-pointer"
                        >
                          Logout
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link href="/login">
                  <Button className="bg-[#265450] hover:bg-[#265450]/90 text-white">
                    Login
                  </Button>
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
