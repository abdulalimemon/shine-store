import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import LoadingPage from "@/components/layout/main/Loading";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <LoadingPage/>
      <Footer/>
    </main>
  );
}
