import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheck, FiMessageCircle, FiArrowRight, FiStar, FiUsers, FiShield, FiHeart } from "react-icons/fi";

const AboutWithWhatsAppCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const trustPoints = [
    { icon: <FiShield />, text: "Verified professionals only", desc: "Rigorous background checks" },
    { icon: <FiUsers />, text: "Personalized care guidance", desc: "Tailored to your needs" },
    { icon: <FiMessageCircle />, text: "Simple WhatsApp coordination", desc: "Real-time communication" },
    { icon: <FiHeart />, text: "Transparent & patient-first", desc: "No hidden costs" },
    { icon: <FiStar />, text: "Quality guaranteed", desc: "Satisfaction assurance" },
    { icon: <FiArrowRight />, text: "Quick connections", desc: "Under 2 hours average" },
  ];

  const features = [
    { value: "50+", label: "Verified Professionals", subtext: "Across India" },
    { value: "24/7", label: "Care Support", subtext: "Always available" },
    { value: "98%", label: "Satisfaction Rate", subtext: "Patient feedback" },
    { value: "2h", label: "Average Response", subtext: "Fast connections" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const cardHoverVariants = {
    initial: { y: 0 },
    hover: { 
      y: -8,
      boxShadow: "0 20px 40px rgba(201, 163, 106, 0.15)",
      transition: { type: "spring", stiffness: 300 }
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-white to-[#FCF8F3] overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#C9A36A]/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#F5E1D8]/30 rounded-full blur-3xl"
          />
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className={`absolute w-2 h-2 rounded-full bg-[#C9A36A]/40 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium text-[#7A5C3E] bg-[#F5E1D8]/30 px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-[#C9A36A]" />
              About Physioga
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight"
            >
              Connecting people with
              <span className="relative inline-block">
                <span className="relative z-10 text-[#C9A36A]">
                  {" "}trusted health & wellness
                </span>
                <motion.span
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-2 left-0 h-3 bg-[#F5E1D8]/50 -z-10"
                />
              </span>
              professionals
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg text-[#4A4A4A] leading-relaxed"
            >
              Physioga is a healthcare connection platform designed to make
              accessing quality care simple, transparent, and human.
              We bridge the gap between patients and verified health
              professionals — including physiotherapists, yoga instructors,
              rehabilitation experts, and wellness specialists.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-[#4A4A4A] leading-relaxed"
            >
              Whether you need recovery support, pain management, or ongoing
              wellness care, we ensure you are guided to the right professional
              with personalized assistance every step of the way.
            </motion.p>

            {/* Enhanced Trust Points Grid */}
            <motion.div
              variants={containerVariants}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A36A] to-[#7A5C3E] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E2E2E] group-hover:text-[#C9A36A] transition-colors duration-300">
                      {point.text}
                    </h4>
                    <p className="mt-1 text-sm text-[#7A5C3E]/70">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            variants={cardHoverVariants}
            whileHover="hover"
            
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-[#FCF8F3] rounded-3xl p-10 shadow-2xl border border-[#F5E1D8] overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#C9A36A]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                style={{
                  background: `conic-gradient(from 0deg, transparent, #C9A36A, #F5E1D8, #7A5C3E, transparent)`,
                  WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                }}
              />

              <div className="relative">
                <motion.h3
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-2xl font-bold text-[#2E2E2E] flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#C9A36A]" />
                  Our Promise to You
                </motion.h3>

                <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
                  We don't just connect you to care — we make sure the care is 
                  <span className="font-semibold text-[#C9A36A]"> perfectly matched </span>
                  to your unique needs and situation.
                </p>

                {/* Features Grid */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-gradient-to-b from-white to-[#F5E1D8]/20 border border-[#F5E1D8]"
                    >
                      <div className="text-2xl font-bold text-[#7A5C3E]">
                        {feature.value}
                      </div>
                      <div className="mt-2 font-medium text-[#2E2E2E]">
                        {feature.label}
                      </div>
                      <div className="mt-1 text-sm text-[#7A5C3E]/70">
                        {feature.subtext}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Preview */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-10 p-6 bg-white/50 rounded-2xl border border-[#F5E1D8]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A36A] to-[#7A5C3E]" />
                    <div>
                      <h4 className="font-semibold text-[#2E2E2E]">Rahul Sharma</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 text-[#C9A36A] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#4A4A4A] italic">
                    "Found my perfect physio within hours. The WhatsApp support made everything so easy!"
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRIMARY WHATSAPP CTA */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A36A] via-[#D8B47C] to-[#7A5C3E]">
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        {/* Decorative Chat Bubbles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-32 h-32 bg-white/5 rounded-[50%] backdrop-blur-sm"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 15}%`,
              borderRadius: i === 0 ? '50%' : i === 1 ? '40%' : '30%',
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <div className="text-center text-white">
            {/* Animated WhatsApp Icon */}
            <motion.div
              animate={pulseAnimation}
              className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-10 h-10 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.38 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.64 6L0 24l6.2-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.77 11.77 0 0 0-3.48-8.52Z" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Need help{" "}
              <span className="relative">
                <span className="relative z-10">right now?</span>
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] -z-10"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Chat with our care team on WhatsApp and get guided instantly —
              no forms, no waiting, just real help from real people.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">🚀</div>
                <div className="mt-2">Under 2 min reply</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">👥</div>
                <div className="mt-2">Expert team online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">🔒</div>
                <div className="mt-2">100% private & secure</div>
              </div>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="group inline-flex items-center justify-center mt-12 px-14 py-5
                         rounded-full bg-white text-[#7A5C3E] font-bold text-lg
                         shadow-[0_20px_60px_rgba(201,163,106,0.4)]
                         hover:shadow-[0_25px_80px_rgba(201,163,106,0.6)]
                         transition-all duration-300 relative overflow-hidden"
            >
              {/* Button glow effect */}
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
              
             <a
  href="https://wa.me/919530045520?text=Hi%20I%20want%20to%20start%20a%20chat"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center"
>
  <span className="relative z-10 flex items-center gap-3">
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <FiMessageCircle className="w-6 h-6" />
    </motion.div>

    Start Chat on WhatsApp

    <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
  </span>
</a>

            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-white/70 text-sm"
            >
              Typically reply within 2 minutes • Available 24/7 • Free consultation
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutWithWhatsAppCTA;