import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-[#B5B5B5]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <a href="#hero" className="text-2xl font-semibold text-[#C9A36A] mb-4 block">
            Physioga
          </a>
          <p className="text-sm leading-relaxed">
            Physioga connects patients with trusted health & wellness
            professionals through a simple, transparent, and human-assisted
            process.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#hero" className="hover:text-[#C9A36A] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#C9A36A] transition">
                About
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-[#C9A36A] transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#C9A36A] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#C9A36A] transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>Email: support@physioga.in</li>
            <li>Phone: +91 9530045520</li>
            <li>India</li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-4">
            Have questions or need help? Chat with us directly on WhatsApp.
          </p>
          <a
            href="https://wa.me/919530045520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-[#C9A36A] text-[#1F1F1F] font-medium shadow hover:bg-[#7A5C3E] hover:text-white transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7A5C3E]/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Physioga. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#C9A36A] transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#C9A36A] transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



