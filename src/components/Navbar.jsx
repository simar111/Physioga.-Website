import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "For You", href: "#audience" },
  { label: "FAQ", href: "#faq" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
const handleNavClick = () => {
    setOpen(false); // close mobile menu after click
  };
  return (
    <nav className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-gradient-to-r from-[#F3D6C8] via-[#F5E1D8] to-[#EECFC0] border-b border-[#C9A36A]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="text-2xl font-semibold tracking-[0.15em] text-[#7A5C3E]">
            PHYSIOGA
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#2E2E2E]">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="hover:text-[#7A5C3E] transition-colors"
                >
                  {item.label}
                </a>
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-[#C9A36A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919530045520"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C9A36A] to-[#B8965A] text-white text-sm font-medium shadow hover:to-[#7A5C3E] transition"
          >
            WhatsApp
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#7A5C3E]">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-[#F5E1D8] to-[#EED2C4] px-6 py-6 space-y-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="block text-[#2E2E2E] font-medium hover:text-[#7A5C3E]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A36A] to-[#B8965A] text-white font-medium"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
