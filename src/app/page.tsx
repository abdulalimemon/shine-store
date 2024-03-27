import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import LoadingPage from "@/components/layout/main/Loading";
import HeroSlider from "@/components/component/home/HeroSlider";

const HomePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <LoadingPage />
      <Footer />
    </main>
  );
};

export default HomePage;
