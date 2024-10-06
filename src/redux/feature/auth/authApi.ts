import { baseApi } from "@/redux/api/baseApi";
import { TLoginInputs } from "@/components/component/auth/LoginForm";
import { TRegisterInputs } from "@/components/component/auth/RegisterForm";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (userInfo: TRegisterInputs) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (userInfo: TLoginInputs) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginMutation, useSigninMutation } = authApi;
