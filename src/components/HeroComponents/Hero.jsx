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
        {/* RIGHT VISUAL */}
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
  <motion.div
    className="relative"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A36A]/20 to-[#7A5C3E]/20 rounded-3xl blur-2xl transform scale-105" />

    {/* Card Container */}
    <div className="relative bg-white/70 backdrop-blur-2xl p-3 sm:p-4 rounded-3xl shadow-2xl border border-white/50 w-full max-w-md">
      
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1D8]/30 to-[#F3D8C8]/20 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center">

        <svg
          viewBox="0 0 400 520"
          className="w-full h-full p-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7A5C3E" />
              <stop offset="100%" stopColor="#C9A36A" />
            </linearGradient>
            <linearGradient id="vertebraGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C9A36A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7A5C3E" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="painGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A36A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7A5C3E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="healGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A36A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C9A36A" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Human silhouette - torso outline */}
          <motion.path
            d="M200 55 C215 55 228 62 235 72 C248 60 258 60 262 70 C268 80 260 92 250 95 C258 108 260 125 255 140 C270 145 278 158 275 172 C272 186 260 192 248 190 C244 210 238 228 232 245 C240 248 245 258 242 268 C239 278 229 282 220 280 C218 295 216 310 215 325 C220 327 224 333 222 340 C220 347 213 350 207 349 C205 362 203 375 202 388 L198 388 C197 375 195 362 193 349 C187 350 180 347 178 340 C176 333 180 327 185 325 C184 310 182 295 180 280 C171 282 161 278 158 268 C155 258 160 248 168 245 C162 228 156 210 152 190 C140 192 128 186 125 172 C122 158 130 145 145 140 C140 125 142 108 150 95 C140 92 132 80 138 70 C142 60 152 60 165 72 C172 62 185 55 200 55Z"
            fill="url(#vertebraGrad)"
            fillOpacity="0.07"
            stroke="url(#spineGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* SPINE COLUMN - central line */}
          <motion.line
            x1="200" y1="75"
            x2="200" y2="390"
            stroke="#C9A36A"
            strokeWidth="2.5"
            strokeOpacity="0.25"
            strokeDasharray="4 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* VERTEBRAE - 14 discs stacked along spine */}
          {[
            { y: 90,  w: 28, h: 10, label: "C1" },
            { y: 104, w: 30, h: 10, label: "C2" },
            { y: 118, w: 32, h: 10, label: "C3" },
            { y: 132, w: 34, h: 11, label: "C4" },
            { y: 147, w: 36, h: 11, label: "T1" },
            { y: 162, w: 38, h: 11, label: "T2" },
            { y: 177, w: 38, h: 11, label: "T3" },
            { y: 192, w: 37, h: 11, label: "T4" },
            { y: 207, w: 36, h: 12, label: "L1" },
            { y: 223, w: 37, h: 12, label: "L2" },
            { y: 239, w: 38, h: 12, label: "L3" },  // pain zone
            { y: 255, w: 40, h: 13, label: "L4" },  // pain zone
            { y: 272, w: 40, h: 13, label: "L5" },  // pain zone
            { y: 289, w: 38, h: 14, label: "S1" },
          ].map((v, i) => (
            <g key={i}>
              {/* Vertebra body */}
              <motion.rect
                x={200 - v.w / 2}
                y={v.y}
                width={v.w}
                height={v.h}
                rx="3"
                fill="url(#vertebraGrad)"
                fillOpacity={i >= 10 ? 0.75 : 0.55}
                stroke={i >= 10 ? "#C9A36A" : "#7A5C3E"}
                strokeWidth={i >= 10 ? "1.5" : "1"}
                strokeOpacity="0.7"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * i + 0.5 }}
                style={{ transformOrigin: `200px ${v.y + v.h / 2}px` }}
              />
              {/* Disc gap (intervertebral disc) */}
              {i < 13 && (
                <motion.rect
                  x={200 - v.w / 2 + 4}
                  y={v.y + v.h}
                  width={v.w - 8}
                  height={3}
                  rx="1.5"
                  fill={i >= 10 ? "#C9A36A" : "#A07850"}
                  fillOpacity={i >= 10 ? 0.5 : 0.25}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i + 0.8 }}
                />
              )}
              {/* Left transverse process */}
              <motion.path
                d={`M${200 - v.w / 2} ${v.y + v.h / 2} Q${200 - v.w / 2 - 18} ${v.y + v.h / 2 - 5} ${200 - v.w / 2 - 24} ${v.y + v.h / 2}`}
                stroke={i >= 10 ? "#C9A36A" : "#7A5C3E"}
                strokeWidth="1.5"
                strokeOpacity={i >= 10 ? 0.7 : 0.4}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.05 * i + 1 }}
              />
              {/* Right transverse process */}
              <motion.path
                d={`M${200 + v.w / 2} ${v.y + v.h / 2} Q${200 + v.w / 2 + 18} ${v.y + v.h / 2 - 5} ${200 + v.w / 2 + 24} ${v.y + v.h / 2}`}
                stroke={i >= 10 ? "#C9A36A" : "#7A5C3E"}
                strokeWidth="1.5"
                strokeOpacity={i >= 10 ? 0.7 : 0.4}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.05 * i + 1 }}
              />
            </g>
          ))}

          {/* PAIN ZONE — lower lumbar L3-L5 pulsing highlight */}
          <motion.ellipse
            cx="200" cy="260"
            rx="50" ry="32"
            fill="url(#painGlow)"
            animate={{
              rx: [50, 62, 50],
              ry: [32, 40, 32],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* PAIN RIPPLE WAVES from L4-L5 */}
          {[0, 0.6, 1.2].map((delay, i) => (
            <motion.ellipse
              key={`ripple-${i}`}
              cx="200" cy="262"
              rx="30" ry="20"
              stroke="#C9A36A"
              strokeWidth="1.5"
              fill="none"
              initial={{ rx: 30, ry: 20, opacity: 0.7 }}
              animate={{
                rx: [30, 75],
                ry: [20, 50],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay,
                ease: "easeOut",
              }}
            />
          ))}

          {/* NERVE ROOTS — radiating from lumbar */}
          {[
            { startX: 176, startY: 252, endX: 130, endY: 290, delay: 1.2 },
            { startX: 224, startY: 252, endX: 270, endY: 290, delay: 1.4 },
            { startX: 174, startY: 266, endX: 120, endY: 315, delay: 1.6 },
            { startX: 226, startY: 266, endX: 280, endY: 315, delay: 1.8 },
            { startX: 172, startY: 280, endX: 115, endY: 340, delay: 2.0 },
            { startX: 228, startY: 280, endX: 285, endY: 340, delay: 2.2 },
          ].map((nerve, i) => (
            <motion.path
              key={`nerve-${i}`}
              d={`M${nerve.startX} ${nerve.startY} Q${(nerve.startX + nerve.endX) / 2} ${nerve.startY + 10} ${nerve.endX} ${nerve.endY}`}
              stroke="#C9A36A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="3 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: nerve.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* PAIN SPARK DOTS at nerve tips */}
          {[
            { cx: 125, cy: 318 }, { cx: 275, cy: 318 },
            { cx: 112, cy: 342 }, { cx: 288, cy: 342 },
          ].map((dot, i) => (
            <motion.circle
              key={`spark-${i}`}
              cx={dot.cx}
              cy={dot.cy}
              r="3.5"
              fill="#C9A36A"
              animate={{
                r: [3.5, 6, 3.5],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.3 + 1.5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* HEALING AURA — gentle ambient glow around full spine */}
          <motion.ellipse
            cx="200" cy="200"
            rx="65" ry="140"
            fill="url(#healGlow)"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* FLOATING PAIN INDICATOR LABEL */}
          <motion.g
            animate={{ x: [0, 4, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="300" y="248" width="68" height="22" rx="11" fill="white" fillOpacity="0.85" />
            <text x="334" y="263" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7A5C3E" fontFamily="sans-serif">
              Pain Zone
            </text>
          </motion.g>
          <motion.line
            x1="300" y1="259" x2="247" y2="262"
            stroke="#C9A36A" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.6"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* VERTEBRA LABEL — Cervical */}
          <motion.g
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          >
            <rect x="58" y="112" width="58" height="18" rx="9" fill="white" fillOpacity="0.7" />
            <text x="87" y="125" textAnchor="middle" fontSize="8" fill="#7A5C3E" fontWeight="600" fontFamily="sans-serif">
              Cervical
            </text>
            <line x1="116" y1="121" x2="166" y2="126" stroke="#7A5C3E" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="2 2"/>
          </motion.g>

          {/* VERTEBRA LABEL — Thoracic */}
          <motion.g
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          >
            <rect x="52" y="173" width="58" height="18" rx="9" fill="white" fillOpacity="0.7" />
            <text x="81" y="186" textAnchor="middle" fontSize="8" fill="#7A5C3E" fontWeight="600" fontFamily="sans-serif">
              Thoracic
            </text>
            <line x1="110" y1="182" x2="161" y2="182" stroke="#7A5C3E" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="2 2"/>
          </motion.g>

          {/* VERTEBRA LABEL — Lumbar */}
          <motion.g
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          >
            <rect x="55" y="240" width="58" height="18" rx="9" fill="white" fillOpacity="0.7" />
            <text x="84" y="253" textAnchor="middle" fontSize="8" fill="#7A5C3E" fontWeight="600" fontFamily="sans-serif">
              Lumbar
            </text>
            <line x1="113" y1="249" x2="159" y2="253" stroke="#C9A36A" strokeWidth="1" strokeOpacity="0.7" strokeDasharray="2 2"/>
          </motion.g>

          {/* SACRUM block at bottom */}
          <motion.path
            d="M182 304 C182 304 188 300 200 300 C212 300 218 304 218 304 L222 340 C222 355 212 362 200 362 C188 362 178 355 178 340 Z"
            fill="url(#vertebraGrad)"
            fillOpacity="0.5"
            stroke="#7A5C3E"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            style={{ transformOrigin: "200px 330px" }}
          />
        </svg>

        {/* Floating Icon Badges */}
        <motion.div
          className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users className="w-5 h-5 text-[#7A5C3E]" />
        </motion.div>

        <motion.div
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        >
          <CheckCircle2 className="w-5 h-5 text-[#7A5C3E]" />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        >
          <p className="text-sm font-medium text-[#2E2E2E]">Spine Pain Relief</p>
        </motion.div>
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
            <p className="text-sm font-semibold text-[#2E2E2E]">Verified Professionals</p>
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

    {/* Floating blur orbs */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 -left-8 w-16 h-16 bg-[#C9A36A]/20 rounded-full blur-xl"
    />
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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