import { motion } from "framer-motion";
import { CheckCircle2, Handshake, MessageCircle, Search, TrendingUp, Shield, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const trustItems = [
  {
    icon: CheckCircle2,
    title: "Verified Physiotherapists",
    subtitle: "100% Background Checked",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Handshake,
    title: "Personalized Assistance",
    subtitle: "Tailored to Your Needs",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    subtitle: "Instant Response 24/7",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Search,
    title: "Transparent Process",
    subtitle: "No Hidden Charges",
    color: "from-amber-400 to-orange-500",
  },
];

const statsItems = [
  { icon: Shield, value: "10,000+", label: "Happy Patients" },
  { icon: TrendingUp, value: "500+", label: "Expert Therapists" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: MapPin, value: "50+", label: "Cities Covered" },
];

const TrustStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-[#FEFAF8] to-white py-16 md:py-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#C9A36A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7A5C3E]/5 rounded-full blur-3xl" />
      
      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #7A5C3E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A36A]/10 to-[#7A5C3E]/10 rounded-full mb-4 border border-[#C9A36A]/20"
          >
            <Shield className="w-4 h-4 text-[#7A5C3E]" />
            <span className="text-sm font-semibold text-[#7A5C3E]">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-3">
            Your Health, Our Priority
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Experience world-class physiotherapy services with complete transparency and care
          </p>
        </motion.div>

        {/* Trust Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A36A]/20 to-[#7A5C3E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#C9A36A]/30 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#7A5C3E]" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Pulse Effect */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color}`}
                      />
                    )}
                  </motion.div>

                  {/* Text Content */}
                  <div className="text-center space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-[#2E2E2E] group-hover:text-[#7A5C3E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#4A4A4A]/80">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C9A36A]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-br from-[#7A5C3E] to-[#5A4530] rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A36A]/20 rounded-full blur-2xl" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsItems.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-3"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <StatIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm md:text-base text-white/80 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* India Coverage Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-[#F5E1D8] rounded-full shadow-lg border border-[#C9A36A]/20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl"
            >
              🇮🇳
            </motion.div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#2E2E2E]">
                Serving Across India
              </p>
              <p className="text-xs text-[#4A4A4A]">
                Available in 50+ cities nationwide
              </p>
            </div>
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A36A] to-[#7A5C3E] border-2 border-white flex items-center justify-center"
                >
                  <MapPin className="w-3 h-3 text-white" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;