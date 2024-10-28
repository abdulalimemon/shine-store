import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000/api/v1
// https://shine-store-server.vercel.app/api/v1

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shine-store-server.vercel.app/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
