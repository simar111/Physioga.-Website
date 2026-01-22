import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Physiotherapy",
    description: "Personalized physiotherapy care for pain relief, mobility, and recovery.",
    icon: "🦴",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    gradient: "from-[#C9A36A] via-[#B8965A] to-[#A8855A]",
  },
  {
    title: "Yoga Therapy",
    description: "Therapeutic yoga sessions focused on healing, flexibility, and balance.",
    icon: "🧘‍♀️",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    gradient: "from-[#D4AF7A] via-[#C9A36A] to-[#B8965A]",
  },
  {
    title: "Rehabilitation",
    description: "Structured rehab programs for injuries, neurological, and orthopedic conditions.",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&auto=format&fit=crop",
    gradient: "from-[#B8965A] via-[#A8855A] to-[#98754A]",
  },
  {
    title: "Post-Surgery Recovery",
    description: "Guided recovery support after surgeries to regain strength and movement.",
    icon: "🩺",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop",
    gradient: "from-[#C9A36A] via-[#B8965A] to-[#A8855A]",
  },
  {
    title: "Pain Management",
    description: "Non-invasive approaches to manage chronic and acute pain effectively.",
    icon: "💆‍♂️",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop",
    gradient: "from-[#D4AF7A] via-[#C9A36A] to-[#B8965A]",
  },
  {
    title: "Wellness & Mobility Care",
    description: "Preventive care focused on long-term wellness and healthy movement.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop",
    gradient: "from-[#B8965A] via-[#A8855A] to-[#98754A]",
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
        
        {/* Image Container with Parallax */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 mix-blend-multiply`} />
          
          {/* Animated Icon */}
          <motion.div
            animate={{
              y: isHovered ? -8 : 0,
              rotate: isHovered ? [0, -10, 10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center rounded-2xl
                       bg-white/90 backdrop-blur-md text-3xl shadow-xl"
            style={{ transform: "translateZ(40px)" }}
          >
            {service.icon}
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            animate={{
              x: isHovered ? ["0%", "200%"] : "0%",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8" style={{ transform: "translateZ(20px)" }}>
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-[#2E2E2E] mb-3"
            animate={{
              color: isHovered ? "#7A5C3E" : "#2E2E2E",
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>
          
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Additional Details */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {/* Stats/Features */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C9A36A]/10 text-xs font-medium text-[#7A5C3E]">
                <span className="w-1.5 h-1.5 bg-[#C9A36A] rounded-full"></span>
                Expert Care
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C9A36A]/10 text-xs font-medium text-[#7A5C3E]">
                <span className="w-1.5 h-1.5 bg-[#C9A36A] rounded-full"></span>
                Personalized
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C9A36A]/10 text-xs font-medium text-[#7A5C3E]">
                <span className="w-1.5 h-1.5 bg-[#C9A36A] rounded-full"></span>
                Results-Driven
              </span>
            </div>

            {/* Duration/Availability */}
            <div className="flex items-center gap-4 text-xs text-[#4A4A4A]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C9A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>45-60 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#C9A36A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>All Ages</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} origin-left`}
        />

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, -60],
                  scale: [0, 1, 0],
                  x: [0, (i - 1) * 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute bottom-20 left-1/2 w-2 h-2 bg-[#C9A36A] rounded-full"
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#FFF9F5] via-white to-[#F5E1D8]/30 overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#C9A36A]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#7A5C3E]/20 rounded-full blur-3xl"
      />

      {/* Floating Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-[#C9A36A]/40 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-[#C9A36A]/10 border border-[#C9A36A]/30"
          >
            <span className="text-sm font-medium text-[#7A5C3E]">Our Services</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A36A] to-[#7A5C3E]">Health & Wellness</span> Journey
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-[#4A4A4A] leading-relaxed px-4"
          >
            Physioga connects you with trusted health professionals across a wide
            range of care and wellness services — not just physiotherapy.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full
                       bg-gradient-to-r from-[#C9A36A] via-[#B8965A] to-[#7A5C3E]
                       text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl
                       transition-all duration-300"
          >
            <span>Join Now</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;