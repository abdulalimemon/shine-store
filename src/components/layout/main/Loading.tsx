import Image from "next/image";
import Container from "@/components/layout/Container";

const LoadingPage = () => {
  return (
    <section className="py-52">
      <Container className="h-full">
        <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
        </div>
      </Container>
    </section>
  );
};

export default LoadingPage;
