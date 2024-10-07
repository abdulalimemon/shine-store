import { baseApi } from "@/redux/api/baseApi";
import { LoginUserData, UserData } from "@/type";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (userInfo: UserData) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (userInfo: LoginUserData) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginMutation, useSigninMutation } = authApi;
