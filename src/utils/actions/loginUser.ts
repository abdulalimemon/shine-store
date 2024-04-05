"use server";

import { LoginUserData } from "@/type";

export const loginUser = async (data: LoginUserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};