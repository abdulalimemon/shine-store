"use client";

import * as React from "react";
import {
  ShoppingBag,
  ListCollapse,
  Star,
  Settings2,
  Gift,
  Users,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserProps } from "@/type";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Orders",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "Order List",
          url: "#",
        },
        {
          title: "Order Details",
          url: "#",
        },
      ],
    },
    {
      title: "Products",
      url: "#",
      icon: Gift,
      items: [
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Add New Product",
          url: "#",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      icon: ListCollapse,
      items: [
        {
          title: "Category List",
          url: "#",
        },
        {
          title: "Add New Category",
          url: "#",
        },
      ],
    },
    {
      title: "Reviews",
      url: "#",
      icon: Star,
      items: [
        {
          title: "Product Reviews",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Add New User",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
      ],
    },
  ],
};

// Define types for props, including UserProps if not previously defined

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: UserProps | null;
}

export function AppSidebar({ session, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser session={session} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
