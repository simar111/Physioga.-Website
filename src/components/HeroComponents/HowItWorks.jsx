import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Submit Your Request",
    description:
      "Fill a quick form or message us on WhatsApp with your health requirement and location.",
    icon: "📝",
  },
  {
    step: "02",
    title: "We Coordinate Personally",
    description:
      "Our team connects you with suitable, verified health professionals based on your needs.",
    icon: "🤝",
  },
  {
    step: "03",
    title: "Start Your Care Journey",
    description:
      "Get started with physiotherapy, yoga, or other wellness services at home or clinic.",
    icon: "💆‍♂️",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#F5E1D8]/40 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute -top-32 right-[-120px] w-[400px] h-[400px] bg-[#C9A36A]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E]">
            How <span className="text-[#7A5C3E]">Physioga</span> Works
          </h2>
          <p className="mt-4 text-[#4A4A4A]">
            A simple, transparent, and human-assisted process to connect you with
            trusted health professionals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#C9A36A] to-[#B8965A] text-white text-sm font-medium shadow">
                Step {item.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#F5E1D8] text-2xl text-[#7A5C3E] shadow-sm mb-6">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#2E2E2E]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[#4A4A4A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
