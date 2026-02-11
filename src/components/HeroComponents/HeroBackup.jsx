import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "../../assets/Hero2.png";
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F5E1D8] via-[#F7E7DC] to-[#F3D8C8] overflow-hidden">
      
      {/* Advanced Animated Background Elements */}
      <motion.div 
        className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-gradient-to-br from-[#C9A36A]/40 to-[#7A5C3E]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-gradient-to-tl from-[#7A5C3E]/30 to-[#C9A36A]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C9A36A]/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#C9A36A]/20"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#C9A36A] border-2 border-white flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-[#2E2E2E]">
                Trusted by 100+ patients
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2E2E2E] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Connecting Patients with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#7A5C3E]">
                    Trusted
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-3 bg-[#C9A36A]/30 -z-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                <br />
                <span className="text-[#7A5C3E]">Physiotherapists</span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl text-[#4A4A4A]/90 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Book verified physiotherapy services near you — fast, reliable,
                and completely hassle-free with personalized assistance.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: CheckCircle2, text: "Verified Professionals" },
                { icon: MessageCircle, text: "24/7 Support" },
                { icon: Users, text: "50+ Therapists" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#2E2E2E] shadow-sm"
                >
                  <item.icon className="w-4 h-4 text-[#7A5C3E]" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://wa.me/919530045520"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(122, 92, 62, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A36A] to-[#7A5C3E] text-white font-semibold shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7A5C3E] to-[#C9A36A]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://wa.me/919530045520"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border-2 border-[#7A5C3E] text-[#7A5C3E] font-semibold hover:bg-[#7A5C3E] hover:text-white transition-all shadow-lg"
              >
                Join as Physiotherapist
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Image Card with Advanced Effects */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A36A]/20 to-[#7A5C3E]/20 rounded-3xl blur-2xl transform scale-105" />
              
              {/* Card Container */}
              <div className="relative bg-white/70 backdrop-blur-2xl p-3 sm:p-4 rounded-3xl shadow-2xl border border-white/50">
                <div className="relative overflow-hidden rounded-2xl">
                 <img
src={heroImage}
  alt="Physiotherapy care"
  className="w-full max-w-md aspect-[4/5] object-cover"
  loading="eager"
  decoding="async"
/>

                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/20 to-transparent" />
                </div>

                {/* Animated Stats Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 sm:-left-6 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl border border-[#C9A36A]/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A36A] to-[#7A5C3E] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2E2E2E]">
                        Verified Professionals
                      </p>
                      <p className="text-xs text-[#4A4A4A]">100% Background Checked</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-br from-[#C9A36A] to-[#7A5C3E] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <div className="text-white">
                      <p className="text-sm font-semibold">WhatsApp Support</p>
                      <p className="text-xs opacity-90">Instant Response</p>
                    </div>
                  </div>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-white px-4 py-3 rounded-xl shadow-xl border border-[#C9A36A]/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C9A36A] fill-[#C9A36A]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#2E2E2E] mt-1">4.9/5 Rating</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 -left-8 w-16 h-16 bg-[#C9A36A]/20 rounded-full blur-xl"
              />
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 -right-8 w-20 h-20 bg-[#7A5C3E]/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;