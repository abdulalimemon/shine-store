import Link from "next/link";
import Container from "../Container";

const TopNavbar = () => {
  return (
    <section className="bg-[#0DA487] py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-xs text-white">Welcome to Shine Store</h4>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <Link href="/" className="text-xs text-white hover:text-blue-500">
              My Wishlist
            </Link>
            <Link
              href="/support-center"
              className="text-xs text-white hover:text-blue-500"
            >
              Support
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopNavbar;
