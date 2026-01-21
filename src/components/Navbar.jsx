import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#F5E1D8]/80 border-b border-[#C9A36A]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wide text-[#7A5C3E]">
          Physioga
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#2E2E2E] font-medium">
          {["Home", "About", "How It Works", "Patients", "Physiotherapists", "Contact"].map(
            (item) => (
              <li key={item} className="relative group">
                <Link
                  to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-[#7A5C3E]"
                >
                  {item}
                </Link>

                {/* Hover underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A36A] transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-[#C9A36A] text-white font-medium shadow-lg hover:shadow-xl hover:bg-[#7A5C3E] transition-all duration-300"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F5E1D8] border-t border-[#C9A36A]/30 px-6 py-6 space-y-4">
          {["Home", "About", "How It Works", "Patients", "Physiotherapists", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-[#2E2E2E] font-medium hover:text-[#7A5C3E] transition"
              >
                {item}
              </Link>
            )
          )}

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-6 py-3 rounded-full bg-[#C9A36A] text-white font-medium shadow hover:bg-[#7A5C3E] transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
