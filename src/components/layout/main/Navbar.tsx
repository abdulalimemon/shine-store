"use client";

import Container from "../Container";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <section className="bg-slate-100">
      <Container>
        <nav className="flex items-center justify-between py-2 mb-24">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <h2>Shine Store</h2>
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
              Flash Sale
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
          <div className="relative flex transition-transform lg:hidden">
            <MobileNav />
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
