"use server";

import { LoginUserData } from "@/type";

// http://localhost:5000/api/v1/login

export const loginUser = async (data: LoginUserData) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    // Check if the response is OK (200)
    if (!res.ok) {
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
