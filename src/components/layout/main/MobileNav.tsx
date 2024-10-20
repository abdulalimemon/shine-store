"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserProps } from "@/type";
import { signOut } from "next-auth/react";

const MobileNav = ({ session }: { session: UserProps | null }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="lg:hidden">
      {showSidebar ? (
        <Menu className="w-6 h-6 mr-2"></Menu>
      ) : (
        <Menu
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-6 h-6 mr-2"
        ></Menu>
      )}
      <div
        className={`top-0 left-0 w-11/12 dark:bg-black bg-slate-100 py-1 px-10 fixed h-screen min-h-screen z-50 overflow-y-auto ease-in-out duration-500 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center py-5">
            <h2 className="font-bold text-lg">Shine Store</h2>
            <button
              className="rounded-full p-2 cursor-pointer fixed right-7 z-50 bg-black dark:bg-white dark:text-black text-white"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="p-1 mt-2">
            <div>
              <div className="mt-6 flex flex-1 flex-col justify-between ">
                <nav className="-mx-3 space-y-6 ">
                  <div className="space-y-3 ">
                    <li
                      className="mobileNav"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      Home
                    </li>
                    <li className="mobileNav">
                      <Link
                        href="/cleaning-supplies"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="mobileNav">
                      <Link
                        href="/flash-sale"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        Flash Sale
                      </Link>
                    </li>

                    {session?.user && (
                      <>
                        <li className="mobileNav">
                          <Link
                            href="/dashboard"
                            onClick={() => setShowSidebar(!showSidebar)}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li className="mobileNav">
                          <Link
                            href="/dashboard/all-products"
                            onClick={() => setShowSidebar(!showSidebar)}
                          >
                            All Products
                          </Link>
                        </li>
                      </>
                    )}

                    <li className="mobileNav">
                      {session?.user ? (
                        <Button onClick={() => signOut()} className="w-1/2 bg-[#265450] hover:bg-[#265450]/90">
                          Logout
                        </Button>
                      ) : (
                        <Link
                          href="/login"
                          className="w-full"
                          onClick={() => setShowSidebar(!showSidebar)}
                        >
                          <Button className="w-1/2 bg-[#265450] hover:bg-[#265450]/90">Login</Button>
                        </Link>
                      )}
                    </li>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
