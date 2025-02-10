import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="bg-slate-100 dark:bg-[#010313] border-t">
      <Container>
        <footer>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 py-7 md:py-10">
              <div className="content-center md:content-start pl-5 md:pl-0 pr-5">
                <h2 className="font-semibold pb-2 text-center md:text-left text-xl">
                  Shine Store
                </h2>
                <p className="font-medium text-center md:text-left text-sm mt-2 mr-0 lg:mr-5">
                  Your source for premium cleaning supplies that make every
                  surface gleam. Explore eco-friendly solutions and effective
                  cleaners for a sparkling home.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 py-7 md:py-10 w-full lg:w-2/3 gap-10">
              <nav>
                <h2 className="font-semibold pb-2 text-lg">Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="footer-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/trending-products" className="footer-link">
                      Trending Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer-link">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/flash-sale" className="footer-link">
                      Flash Sale
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <h2 className="font-semibold pb-2 text-lg">About</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about-us" className="footer-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="footer-link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer-link">
                      Customer Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="footer-link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="footer-link">
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <h2 className="font-semibold pb-2 text-lg">Social</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.facebook.com/" className="footer-link">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" className="footer-link">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" className="footer-link">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="footer-link"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </Container>
      <div className="border-t py-5 text-center text-sm text-semibold">
        <Container>
          <p>&copy; {year} Shine Store. All Rights Reserved.</p>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
