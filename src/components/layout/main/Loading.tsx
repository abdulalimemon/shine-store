import Container from "@/components/layout/Container";

const LoadingPage = () => {
  return (
    <section className="h-[100vh]">
      <Container className="h-full">
        <div className="flex items-center justify-center h-full">
          <div className="loader"></div>
        </div>
      </Container>
    </section>
  );
};

export default LoadingPage;
