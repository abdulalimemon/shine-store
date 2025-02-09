"use client";

import Container from "@/components/layout/Container";
import { EyeIcon, EyeOffIcon, Fingerprint, Mail, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginWithGoogle from "@/components/component/auth/LoginWithGoogle";
import Link from "next/link";
import { UserData } from "@/type";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/actions/registerUsers";
import { useState } from "react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data: UserData) => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        toast({
          title: res.message,
          description: "Please, Login.",
        });
        router.push("/login");
      }
    } catch (err: any) {
      toast({
        title: err.message,
        description: "Please, Try again.",
      });
      throw new Error(err.message);
    }
  };

  return (
    <section className="py-10">
      <Container className="flex flex-col items-center justify-center py-12  px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mt-3 text-2xl font-semibold text-center sm:text-3xl dark:text-white">
            Sign Up
          </h2>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <UserRound className="size-6 mx-3 text-gray-300" />
            </span>

            <Input
              type="text"
              className="block w-full h-12 px-11"
              placeholder="Full Name"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
                minLength: {
                  value: 3,
                  message: "Name must be 3 characters or longer.",
                },
              })}
            />
          </div>
          <div className="pt-2">
            {errors.name?.type === "required" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="relative flex items-center mt-3">
            <span className="absolute">
              <Mail className="size-6 mx-3 text-gray-300" />
            </span>

            <Input
              type="email"
              className="block w-full h-12 px-11"
              placeholder="Email address"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required.",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide a valid email address.",
                },
              })}
            />
          </div>

          <div className="pt-2">
            {errors.email?.type === "required" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative flex items-center mt-5">
            <span className="absolute left-3">
              <Fingerprint className="size-6 text-gray-300" />
            </span>

            <Input
              type={isVisible ? "text" : "password"}
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

            {/* Second icon (right side) */}
            <span className="absolute right-3" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeIcon className="size-5 text-gray-500 cursor-pointer" />
              ) : (
                <EyeOffIcon className="size-5 cursor-pointer text-gray-500" />
              )}
            </span>
          </div>

          <div className="pt-2">
            {errors.password?.type === "required" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-sm mt-2 text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-5">
            <Button className="w-full h-12 bg-[#265450] text-white hover:bg-[#265450]/90" type="submit">
              Sign Up
            </Button>
          </div>
        </form>

        <div className="flex items-center pt-5 pb-1 space-x-2 w-full max-w-md">
          <div className="flex-1 h-px bg-gray-500"></div>
          <p className="text-sm">Sign up with social accounts</p>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <LoginWithGoogle text="Sign up" />
        <div className="mt-5 text-center ">
          <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Already have an account?
            <Link href="/login" className="underline hover:text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RegisterForm;
