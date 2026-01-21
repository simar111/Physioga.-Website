import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#F5E1D8] via-[#F7E7DC] to-[#F3D8C8] overflow-hidden">
      
      {/* Floating Decorative Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#C9A36A]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#7A5C3E]/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2E2E2E] leading-tight">
            Connecting Patients with <br />
            <span className="text-[#7A5C3E]">Trusted Physiotherapists</span>
          </h1>

          <p className="mt-6 text-lg text-[#4A4A4A] max-w-xl">
            Book verified physiotherapy services near you — fast, reliable,
            and completely hassle-free with personalized assistance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="px-8 py-4 rounded-full bg-[#C9A36A] text-white font-medium shadow-lg hover:bg-[#7A5C3E] hover:shadow-xl transition-all"
            >
              Book Physiotherapy
            </a>

            <a
              href="/physiotherapists"
              className="px-8 py-4 rounded-full border border-[#7A5C3E] text-[#7A5C3E] font-medium hover:bg-[#7A5C3E] hover:text-white transition-all"
            >
              Join as Physiotherapist
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Image Card */}
          <div className="relative bg-white/60 backdrop-blur-xl p-4 rounded-3xl shadow-2xl">
            <img
              src="./Hero1.png"
              alt="Physiotherapy care"
              className="w-full max-w-md rounded-2xl object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-medium text-[#2E2E2E]">
                ✔ Verified Professionals
              </p>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#C9A36A] px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-medium text-white">
                💬 WhatsApp Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
