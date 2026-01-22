import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  "Home",
  "About",
  "How It Works",
  "Patients",
  "Physiotherapists",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      {/* Rose-gold metallic background */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-[#F3D6C8] via-[#F5E1D8] to-[#EECFC0] border-b border-[#C9A36A]/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* If you add image logo later */}
            {/* <img src="/logo.png" alt="Physioga" className="h-8 w-auto" /> */}

            <span className="text-2xl font-semibold tracking-[0.15em] text-[#7A5C3E]">
              PHYSIOGA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#2E2E2E]">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-[#7A5C3E]"
                >
                  {item}
                </Link>

                {/* Elegant underline */}
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-[#C9A36A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full
                       bg-gradient-to-r from-[#C9A36A] to-[#B8965A]
                       text-white text-sm font-medium
                       shadow-md hover:shadow-lg hover:from-[#B8965A] hover:to-[#7A5C3E]
                       transition-all duration-300"
          >
            WhatsApp
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#7A5C3E]"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-[#F5E1D8] to-[#EED2C4] border-t border-[#C9A36A]/40 px-6 py-6 space-y-5 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-[#2E2E2E] font-medium tracking-wide hover:text-[#7A5C3E] transition"
            >
              {item}
            </Link>
          ))}

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-6 px-6 py-3 rounded-full
                       bg-gradient-to-r from-[#C9A36A] to-[#B8965A]
                       text-white font-medium shadow hover:from-[#B8965A] hover:to-[#7A5C3E]
                       transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
