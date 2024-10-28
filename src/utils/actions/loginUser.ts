// "use server";

// import { LoginUserData } from "@/type";

// // http://localhost:5000/api/v1/login
// // ${process.env.BACKEND_URL}/login

// export const loginUser = async (data: LoginUserData) => {
//   try {
//     const res = await fetch(`${process.env.BACKEND_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       cache: "no-store",
//     });

//     // Check if the response is OK (200)
//     if (!res.ok) {
//       const errorResponse = await res.json();
//       throw new Error(errorResponse.message || "Login failed");
//     }
//     const userInfo = await res.json();
//     return userInfo;
//   } catch (error: any) {
//     console.error("Login User Error:", error.message);
//     throw new Error(error.message || "Login failed");
//   }
// };


"use server";

import { LoginUserData } from "@/type";

export const loginUser = async (data: LoginUserData) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      // Check if response is JSON and handle it accordingly
      const contentType = res.headers.get("Content-Type");
      let errorMessage = "Login failed"; // Default message

      // If the content type is JSON, attempt to parse it
      if (contentType && contentType.includes("application/json")) {
        const errorResponse = await res.json();
        errorMessage = errorResponse.message || errorMessage;
      } else {
        // If the response is not JSON, get the text (e.g., server error message)
        const errorText = await res.text();
        errorMessage = errorText || errorMessage;
      }

      throw new Error(errorMessage);
    }

    // If the response is successful, parse JSON
    const userInfo = await res.json();
    return userInfo;

  } catch (error: any) {
    // Log and throw the error
    console.error("Login User Error:", error.message);
    throw new Error(error.message || "Login failed");
  }
};
