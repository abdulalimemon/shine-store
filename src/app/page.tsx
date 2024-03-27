import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import LoadingPage from "@/components/layout/main/Loading";
import HeroSlider from "@/components/component/home/HeroSlider";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSlider/>
      <LoadingPage/>
      <Footer/>
    </main>
  );
}
