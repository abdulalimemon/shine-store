import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="bg-slate-100">
      <Container>
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-4 py-7 md:py-10  gap-10">
            <div className="content-center">
              <h2 className="font-semibold text-center md:text-left text-xl">
                Shine Store
              </h2>
              <p className="font-medium text-center md:text-left text-sm mt-2">Your source for premium cleaning supplies that make every surface gleam. Explore eco-friendly solutions and effective cleaners for a sparkling home.</p>
            </div>
            <nav className="place-content-center">
              <h2 className="font-semibold pb-2 text-lg">Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trending-products"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Trending Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flash-sale"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Flash Sale
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h2 className="font-semibold pb-2 text-lg">About</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Customer Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h2 className="font-semibold pb-2 text-lg">Social</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="cursor-pointer hover:underline text-base font-medium"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </Container>
      <div className="bg-sky-100 py-5 text-center text-sm text-semibold">
        <Container>
          <p>&copy; {year} Shine Store. All Rights Reserved.</p>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
