"use server";

import { LoginUserData } from "@/type";

export const loginUser = async (data: LoginUserData) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (!res.ok) {
      // Throw an error if login failed
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Login failed");
    }

    const userInfo = await res.json();
    return userInfo;
  } catch (error: any) {
    console.error("Login User Error:", error.message);
    throw new Error(error.message || "Login failed");
  }
};
