"use client";

import Container from "@/components/layout/Container";
import { Fingerprint, Mail, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginWithGoogle from "@/components/component/auth/LoginWithGoogle";
import Link from "next/link";
import { UserData } from "@/type";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/actions/registerUsers";

export type TRegisterInputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    console.log(data);

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
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <section className="py-20 dark:bg-slate-900">
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

          <div className="relative flex items-center mt-3">
            <span className="absolute">
              <Fingerprint className="size-6 mx-3 text-gray-300" />
            </span>

            <Input
              type="password"
              className="block w-full h-12 px-11"
              placeholder="Password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required.",
                },
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters or longer.",
                },
              })}
            />
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
            <Button className="w-full h-12" type="submit">
              Sign Up
            </Button>
          </div>
        </form>

        <div className="flex items-center pt-5 pb-1 space-x-2 w-full max-w-md">
          <div className="flex-1 h-px bg-gray-500"></div>
          <p className="text-sm">Sign up with social accounts</p>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <LoginWithGoogle />
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
