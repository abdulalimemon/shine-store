"use client";

import Container from "../Container";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-slate-100">
      <Container>
        <nav className="flex items-center justify-between py-2">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 lg:mx-0 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <Link href="/">
              <h2>Shine Store</h2>
            </Link>
          </div>
          <ul className="hidden font-semibold items-center justify-between gap-10 md:flex">
            <li className="group flex  cursor-pointer flex-col">
              Home
              <span className="navUnderline"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              Categories
              <span className="navUnderline"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              Products
              <span className="navUnderline"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
              <Link href='/flash-sale'>Flash Sale</Link>
              <span className="navUnderline"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              About Us
              <span className="navUnderline"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Contact US
              <span className="navUnderline"></span>
            </li>
          </ul>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
