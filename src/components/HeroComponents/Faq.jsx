import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiShield, FiClock, FiDollarSign, FiHome, FiMessageSquare, FiCheckCircle, FiHelpCircle } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const faqs = [
    {
      question: "Is Physioga a clinic or hospital?",
      answer: "No, Physioga is not a clinic. We're a healthcare connection platform that bridges the gap between patients and verified health professionals. Think of us as your personal health concierge — we connect you directly with physiotherapists, yoga instructors, and wellness specialists who come to you or offer virtual sessions.",
      icon: <FiHome />,
      category: "Understanding Physioga",
      color: "from-[#C9A36A] to-[#7A5C3E]"
    },
    {
      question: "How are professionals verified?",
      answer: "Every professional undergoes a rigorous 5-step verification process: 1) License and credential verification, 2) Background checks, 3) Experience validation (minimum 3 years), 4) Patient reference checks, and 5) Skill assessment. Only 23% of applicants pass our verification, ensuring you get access to top-tier professionals.",
      icon: <FiShield />,
      category: "Trust & Safety",
      color: "from-[#25D366] to-[#128C7E]"
    },
    {
      question: "Is there any extra charge or hidden fees?",
      answer: "Absolutely not. What you see is what you pay. The price quoted includes the professional's fee, our coordination support, and any platform services. No hidden charges, no surprises. You pay directly to the professional after your session is completed to your satisfaction.",
      icon: <FiDollarSign />,
      category: "Pricing",
      color: "from-[#667eea] to-[#764ba2]"
    },
    {
      question: "How fast is the response time?",
      answer: "Our average response time is under 2 minutes during business hours. We're available 24/7 via WhatsApp for urgent inquiries. Once connected, we match you with a professional within 2 hours on average, and often much faster for common needs.",
      icon: <FiClock />,
      category: "Service",
      color: "from-[#f093fb] to-[#f5576c]"
    },
    {
      question: "What if I'm not satisfied with the professional?",
      answer: "Your satisfaction is guaranteed. If for any reason you're not happy with your first session, we'll find you another professional at no extra cost, and the first session is free. We continuously monitor feedback and maintain quality standards.",
      icon: <FiCheckCircle />,
      category: "Support",
      color: "from-[#4facfe] to-[#00f2fe]"
    },
    {
      question: "Can I book sessions for my family members?",
      answer: "Yes! You can book sessions for parents, children, or any family member. Our team will coordinate with you to understand their specific needs and match them with the most suitable professional. We handle all the logistics so you can focus on their care.",
      icon: <FiMessageSquare />,
      category: "Booking",
      color: "from-[#43e97b] to-[#38f9d7]"
    },
    {
      question: "Do you offer virtual/online consultations?",
      answer: "Yes! We offer both in-person and virtual consultations. Many of our professionals are equipped for telehealth sessions. Virtual consultations are perfect for follow-ups, minor concerns, or when you prefer the convenience of home. We guide you on which option is best for your situation.",
      icon: <FiMessageSquare />,
      category: "Services",
      color: "from-[#fa709a] to-[#fee140]"
    },
    {
      question: "How do I get started with Physioga?",
      answer: "It's simple: 1) Message us on WhatsApp describing your needs, 2) Our care team asks a few questions to understand your situation, 3) We match you with verified professionals, 4) You choose who you prefer, 5) We coordinate the first session. No downloads, no forms, just human support.",
      icon: <FiHelpCircle />,
      category: "Getting Started",
      color: "from-[#a8edea] to-[#fed6e3]"
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-[#F9F5F0] overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-[#C9A36A]/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-10 w-96 h-96 bg-[#F5E1D8]/20 rounded-full blur-3xl"
        />
        
        {/* Floating Question Marks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute text-6xl md:text-8xl opacity-5 ${
              i % 2 === 0 ? "font-bold" : "font-extrabold"
            }`}
            style={{
              left: `${10 + i * 25}%`,
              top: `${10 + i * 15}%`,
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6" ref={containerRef}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E1D8]/30 mb-6">
            <FiHelpCircle className="w-4 h-4 text-[#7A5C3E]" />
            <span className="text-sm tracking-widest uppercase font-medium text-[#7A5C3E]">
              Common Questions
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] mb-6">
            Questions we hear
            <span className="relative block">
              <span className="relative z-10 text-[#C9A36A]"> all the time</span>
              <motion.span
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-2 left-0 h-3 bg-[#F5E1D8]/50 -z-10"
              />
            </span>
          </h2>
          
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know about
            how Physioga works and why thousands trust us with their health.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button className="px-4 py-2 rounded-full bg-[#C9A36A] text-white font-medium text-sm">
            All Questions
          </button>
          {categories.slice(0, 4).map((category, index) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white border border-[#F5E1D8] text-[#7A5C3E] font-medium text-sm hover:bg-[#F5E1D8]/30 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl overflow-hidden border border-[#F5E1D8] shadow-lg hover:shadow-xl transition-all duration-300 ${
                  activeIndex === index ? "ring-2 ring-[#C9A36A]/20" : ""
                }`}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${faq.color} text-white text-xs font-medium`}>
                    {faq.icon}
                    <span>{faq.category}</span>
                  </div>
                </div>

                {/* FAQ Item */}
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full text-left p-8 pr-16"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center text-white`}
                    >
                      {faq.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#2E2E2E] pr-8">
                        {faq.question}
                      </h3>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="mt-4 text-[#4A4A4A] leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                            
                            {/* Additional Info for Verification FAQ */}
                            {index === 1 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-4 p-4 bg-[#F5E1D8]/20 rounded-lg"
                              >
                                <div className="flex items-center justify-between text-sm text-[#7A5C3E]">
                                  <span>License Check</span>
                                  <FiCheckCircle className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-between text-sm text-[#7A5C3E] mt-2">
                                  <span>Background Verified</span>
                                  <FiCheckCircle className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-between text-sm text-[#7A5C3E] mt-2">
                                  <span>Experience Validation</span>
                                  <FiCheckCircle className="w-4 h-4" />
                                </div>
                              </motion.div>
                            )}
                            
                            {/* Additional Info for Response Time FAQ */}
                            {index === 3 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-4 flex items-center gap-4 text-sm text-[#7A5C3E]"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                  <span>Avg. reply: 2 min</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                                  <span>24/7 support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                                  <span>Fast matching</span>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="absolute top-8 right-8 text-[#C9A36A]"
                  >
                    <FiChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#C9A36A] to-[#7A5C3E]">
            <div className="bg-white rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
                  <FiMessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E2E2E]">
                  Still have questions?
                </h3>
              </div>
              
              <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                Our care team is here to help. Chat with us on WhatsApp for 
                personalized answers to your specific situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919530045520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold hover:shadow-lg transition-all duration-300 group"
                >
                  <FiMessageSquare className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Ask on WhatsApp
                  <FiChevronDown className="w-4 h-4 ml-2 transform rotate-270 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="tel:+919530045520"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A36A] to-[#7A5C3E] text-white font-semibold hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="mr-3">📞</span>
                  Call Us Directly
                  <FiChevronDown className="w-4 h-4 ml-2 transform rotate-270 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <p className="mt-6 text-sm text-[#7A5C3E]/70">
                Typically reply within 2 minutes • Available 24/7 • Free consultation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 rounded-2xl bg-white border border-[#F5E1D8]">
            <div className="text-2xl font-bold text-[#C9A36A]">50+</div>
            <div className="mt-2 text-sm text-[#7A5C3E]">Questions answered daily</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#F5E1D8]">
            <div className="text-2xl font-bold text-[#C9A36A]">24/7</div>
            <div className="mt-2 text-sm text-[#7A5C3E]">Support availability</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#F5E1D8]">
            <div className="text-2xl font-bold text-[#C9A36A]">98%</div>
            <div className="mt-2 text-sm text-[#7A5C3E]">Satisfaction rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#F5E1D8]">
            <div className="text-2xl font-bold text-[#C9A36A]">2min</div>
            <div className="mt-2 text-sm text-[#7A5C3E]">Average response time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;