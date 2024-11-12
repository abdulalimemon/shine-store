"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserProps } from "@/type";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { getUserInfo, removeUser } from "@/utils/auth.services";
import { useRouter } from "next/navigation";
import userIcon from "../../../../public/user.png";
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
import { SidebarTrigger } from "@/components/ui/sidebar";

const AdminNavbar = ({ session }: { session: UserProps | null }) => {
  const { setTheme } = useTheme();
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    removeUser();
    signOut();
    router.refresh();
  };

  return (
    <section className="bg-slate-100 dark:bg-[#010313] border-b">
      <div className="px-5">
        <nav className="flex items-center justify-between py-2">
          <div className="flex gap-3 justify-center items-center">
            <SidebarTrigger className="-ml-1" />
            <h2 className="font-semibold">Shine Store</h2>
          </div>
          <ul className="font-semibold flex items-center justify-end gap-5 lg:flex">
            <li className="hidden group md:flex cursor-pointer flex-col">
              <Link href="/">Website</Link>
              <span className="navUnderline"></span>
            </li>
            <div className="flex items-center justify-center">
              <div className="group flex cursor-pointer flex-col mr-4 md:mr-6">
                <Sun
                  className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
                <Moon
                  className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              </div>
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="border-2 rounded-full border-[#265450] p-[2px]">
                      <Image
                        src={session?.user?.image || userIcon}
                        width={24}
                        height={24}
                        className="size-5 md:size-7 cursor-pointer rounded-full"
                        alt="user"
                      />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-3">
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
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default AdminNavbar;
