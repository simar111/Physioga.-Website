import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const AudienceSplit = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e, card) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#F5E1D8] via-[#F8EDE5] to-[#F5E1D8] overflow-hidden">
      
      {/* Enhanced ambient gradients with animation */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-[-100px] w-[500px] h-[500px] bg-gradient-radial from-[#C9A36A]/30 via-[#C9A36A]/15 to-transparent rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-140px] right-[-100px] w-[500px] h-[500px] bg-gradient-radial from-[#7A5C3E]/30 via-[#7A5C3E]/15 to-transparent rounded-full blur-3xl" 
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C9A36A]/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Enhanced Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#C9A36A]/30 shadow-sm"
          >
            <span className="text-sm font-medium text-[#7A5C3E] tracking-wide">
              Two Sides, One Platform
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#7A5C3E]">Care Seekers</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 w-full h-3 bg-[#C9A36A]/20 -z-0"
              />
            </span>
            {" "}&{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#7A5C3E]">Care Providers</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-1 left-0 w-full h-3 bg-[#C9A36A]/20 -z-0"
              />
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
            Physioga connects patients and health professionals through a
            seamless, trusted, and transparent platform.
          </p>
        </motion.div>

        {/* Enhanced Split Cards */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* FOR PATIENTS - Enhanced Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={(e) => handleMouseMove(e, 'patient')}
            onMouseEnter={() => setHoveredCard('patient')}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#C9A36A]/40 to-[#D4B896]/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12
                           border border-[#C9A36A]/30 shadow-xl
                           transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#C9A36A]/50
                           overflow-hidden">
              
              {/* Animated accent bar */}
              <motion.div 
                className="absolute top-0 left-0 w-1.5 bg-gradient-to-b from-[#C9A36A] via-[#D4B896] to-[#C9A36A] rounded-l-3xl"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Subtle pattern overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]"
                   style={{
                     backgroundImage: `radial-gradient(circle, #7A5C3E 1px, transparent 1px)`,
                     backgroundSize: '20px 20px'
                   }}
              />

              {/* Icon/Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A36A] to-[#B8926A] shadow-lg mb-6"
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>

              <span className="text-xs tracking-[0.2em] text-[#7A5C3E] uppercase font-semibold">
                For Patients
              </span>

              <h3 className="mt-5 text-3xl font-bold text-[#2E2E2E] leading-tight">
                Care that feels personal, trusted, and easy
              </h3>

              <ul className="mt-8 space-y-5">
                {[
                  "Personalized care matched to your needs",
                  "Verified and experienced health professionals",
                  "Simple booking via WhatsApp assistance"
                ].map((text, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A36A]/10 text-[#C9A36A] group-hover/item:bg-[#C9A36A] group-hover/item:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[#4A4A4A] leading-relaxed font-medium">{text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
   onClick={() => {
    window.open(
      "https://wa.me/919530045520",
      "_blank"
    );
  }}
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full
             bg-gradient-to-r from-[#C9A36A] to-[#B8926A] text-white font-semibold shadow-lg
             hover:shadow-xl hover:scale-105 active:scale-95
             transition-all duration-300 relative overflow-hidden"
>
  <span className="relative z-10">Book Care</span>

  <motion.svg
    className="w-5 h-5 relative z-10"
    animate={{ x: hoveredCard === 'patient' ? 5 : 0 }}
    transition={{ duration: 0.3 }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </motion.svg>

  <motion.div
    className="absolute inset-0 bg-white/20"
    initial={{ x: '-100%' }}
    whileHover={{ x: '100%' }}
    transition={{ duration: 0.6 }}
  />
</motion.button>

            </div>
          </motion.div>

          {/* FOR PROFESSIONALS - Enhanced Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={(e) => handleMouseMove(e, 'professional')}
            onMouseEnter={() => setHoveredCard('professional')}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#7A5C3E]/60 to-[#8B6D4E]/60 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative bg-gradient-to-br from-[#7A5C3E] via-[#6B4F35] to-[#7A5C3E] rounded-3xl p-12
                           text-white shadow-2xl
                           transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(122,92,62,0.5)]
                           overflow-hidden">
              
              {/* Animated mesh gradient overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
              </div>

              {/* Geometric accent */}
              <div className="absolute top-0 right-0 w-96 h-96 opacity-5"
                   style={{
                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
                   }}
              />

              {/* Icon/Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm shadow-lg mb-6 border border-white/20"
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>

              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/90">
                For Health Professionals
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight">
                Grow your practice without the marketing headache
              </h3>

              <ul className="mt-8 space-y-5">
                {[
                  "Access genuine client leads",
                  "Flexible opportunities on your own schedule",
                  "Zero marketing or outreach effort required"
                ].map((text, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[#F5E1D8] group-hover/item:bg-white group-hover/item:text-[#7A5C3E] transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-white/95 leading-relaxed font-medium">{text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={() => {
    window.open(
      "https://wa.me/919530045520",
      "_blank"
    );
  }}
                className="group/btn inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full
                           bg-white text-[#7A5C3E] font-semibold shadow-xl
                           hover:bg-[#F5E1D8] hover:shadow-2xl hover:scale-105 active:scale-95
                           transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Join as Professional</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10"
                  animate={{ x: hoveredCard === 'professional' ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-[#7A5C3E]/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-white/60 backdrop-blur-sm border border-[#C9A36A]/20 shadow-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A36A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-[#4A4A4A]">Trusted by 10+ users</span>
            </div>
            <div className="w-px h-6 bg-[#C9A36A]/30" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A36A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[#4A4A4A]">Verified professionals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSplit;