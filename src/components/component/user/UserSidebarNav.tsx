"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/user",
    label: "Dashboard",
    icon: <HomeIcon className="size-6" aria-hidden="true" />,
  },
  {
    path: "/user/order",
    label: "Orders",
    icon: <HomeIcon className="size-6" aria-hidden="true" />,
  },
  {
    path: "/user/wishlist",
    label: "Wishlist",
    icon: <HomeIcon className="size-6" aria-hidden="true" />,
  },
  {
    path: "/user/address",
    label: "Address",
    icon: <HomeIcon className="size-6" aria-hidden="true" />,
  },
  {
    path: "/user/profile",
    label: "Profile",
    icon: <HomeIcon className="size-6" aria-hidden="true" />,
  },
];

const UserSidebarNav = () => {
  const currentPath = usePathname();
  return (
    <div className="flex flex-1 flex-col justify-between">
      <nav>
        <div className="space-y-2 mb-5">
          {routes.map((route) => (
            <Link
              key={route.path}
              className={
                currentPath === route.path
                  ? "sidebarNavActive font-bold"
                  : "sidebarNav"
              }
              href={route.path}
            >
              {route.icon}
              <span className="mx-3 text-sm">{route.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default UserSidebarNav;
