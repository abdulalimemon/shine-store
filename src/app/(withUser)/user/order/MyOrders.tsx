"use client";

import { List, LayoutGrid } from "lucide-react";
import MyOrdersCard from "./MyOrdersCard";
import { useState } from "react";

const MyOrders = () => {
  const [view, setView] = useState<number>(2);

  const handleViewChange = (columns: number) => {
    setView(columns);
  };
  return (
    <div className="border rounded-md p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Orders</h2>
        <div className="flex items-center border rounded-md cursor-pointer">
          <div
            onClick={() => handleViewChange(1)}
            className={`p-2 border rounded ${view === 1 ? "bg-slate-200  dark:bg-[#27272A] hover:bg-slate-100 dark:hover:bg-[#27272A]" : "hover:bg-slate-100 dark:hover:bg-[#27272A]"}`}
          >
            <List className="size-5" />
          </div>
          <div
            onClick={() => handleViewChange(2)}
            className={`p-2 border rounded ${view === 2 ? "bg-slate-200 hover:bg-slate-100 dark:bg-[#27272A] dark:hover:bg-[#27272A]" : "hover:bg-slate-100 dark:hover:bg-[#27272A]"}`}
          >
            <LayoutGrid className="size-5" />
          </div>
        </div>
      </div>
      <div className="my-5">
        <div
          className={`grid gap-5 p-2 ${
            view === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <MyOrdersCard view={view} />
          <MyOrdersCard view={view} />
          <MyOrdersCard view={view} />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
