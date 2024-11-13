import Container from "@/components/layout/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/main/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Footer from "@/components/layout/main/Footer";

const NotFound = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar session={session} />
      <section className="my-10 h-[90vh] flex justify-center items-center">
        <Container>
          <div className="py-10">
            <div className="text-center">
              <p className="text-8xl font-bold text-gradient">404</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl text">
                Oops! Page Not Found.
              </h2>
              <p className="mt-4 text-base leading-7 text2">
                It seems like you&apos;ve stumbled upon a page that doesn&apos;t
                exist. Don&apos;t worry, it happens to the best of us.
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-3">
                <Link href="/">
                  <Button>
                    <ArrowLeft className="mr-2 size-5" />
                    Go back to the homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
