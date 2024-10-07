"use client";

import Container from "@/components/layout/Container";
import { Fingerprint, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginWithGoogle from "@/components/component/auth/LoginWithGoogle";
import Link from "next/link";
import { LoginUserData } from "@/type";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/actions/loginUser";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserData>();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginUserData> = async (data) => {
    try {
      // Call the server action to login the user
      const res = await loginUser(data);

      // If we have a valid token, log the user in
      if (res?.accessToken) {
        toast({
          title: res.message,
          description: "Login successful!",
        });

        // Save the token in localStorage
        localStorage.setItem("accessToken", res.accessToken);

        // Debugging check - Make sure token is stored correctly
        const token = localStorage.getItem("accessToken");
        console.log("Token stored in localStorage: ", token);

        // Redirect the user to the dashboard
        router.push("/dashboard");
      } else {
        throw new Error("No access token received");
      }
    } catch (error: any) {
      console.error("Login Error: ", error.message);
      toast({
        title: "Login failed",
        description: error.message,
      });
    }
  };

  // Use effect to check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // If token exists, redirect to dashboard
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <section className="py-20 dark:bg-slate-900">
      <Container className="flex flex-col items-center justify-center py-12  px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mt-3 text-2xl font-semibold text-center sm:text-3xl dark:text-white">
            Log in
          </h2>
          <p className="text-center">(Please login with Google)</p>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Mail className="size-6 mx-3 text-gray-300" />
            </span>
            <Input
              type="email"
              className="block w-full h-12 px-11"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </div>

          {errors.email && (
            <span className="text-sm mt-2 text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Fingerprint className="size-6 mx-3 text-gray-300" />
            </span>
            <Input
              type="password"
              className="block w-full h-12 px-11"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters or longer",
                },
              })}
            />
          </div>

          {errors.password && (
            <span className="text-sm mt-2 text-red-600 font-semibold">
              {errors.password.message}
            </span>
          )}

          <div className="mt-5">
            <Button className="w-full h-12" type="submit">
              Log in
            </Button>
          </div>
        </form>

        <div className="flex items-center pt-5 pb-1 space-x-2 w-full max-w-md">
          <div className="flex-1 h-px bg-gray-500"></div>
          <p className="text-sm">Login with social accounts</p>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <LoginWithGoogle />

        <div className="mt-5 text-center">
          <p className="text-sm flex justify-center gap-2">
            Don&apos;t have an account?
            <Link href="/sign-up" className="underline hover:text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default LoginForm;
