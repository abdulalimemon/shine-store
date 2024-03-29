import Container from "@/components/layout/Container";
import { Fingerprint, Mail, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginWithGoogle from "@/components/component/auth/LoginWithGoogle";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <section className="my-20">
      <Container className="flex flex-col items-center justify-center py-12  px-6 mx-auto">
        <form className="w-full max-w-md">
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
            />
          </div>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Mail className="size-6 mx-3 text-gray-300" />
            </span>

            <Input
              type="email"
              className="block w-full h-12 px-11"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Fingerprint className="size-6 mx-3 text-gray-300" />
            </span>

            <Input
              type="password"
              className="block w-full h-12 px-11"
              placeholder="Password"
            />
          </div>

          <div className="mt-5">
            <Button className="w-full h-12">Sign Up</Button>
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
