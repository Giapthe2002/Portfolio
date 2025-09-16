import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";
import { UseTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Input/TextInput";
import SuccessModel from "../SuccessModel";

import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { isDarkMode } = UseTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    try {
      await emailjs.send(
        "service_sishxlv",
        "template_4ormf3j",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "h35ktPhFPCtKw15AL"
      );

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message, please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get In <span className="text-blue-500 font-medium">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-24"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? " bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : " bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>
              <div className="space-y-6">
                <div className="grid gap-6">
                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.name}
                    handleInputChange={(text) =>
                      handleInputChange("name", text)
                    }
                    label="Your Name"
                  />
                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.email}
                    handleInputChange={(text) =>
                      handleInputChange("email", text)
                    }
                    label="Email Address"
                  />
                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.message}
                    handleInputChange={(text) =>
                      handleInputChange("message", text)
                    }
                    label="Your Message"
                  />

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2  cursor-pointer"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8 mt-24"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-cente py-2 space-x-4 rounded-xl ${
                      isDarkMode
                        ? " bg-gray-800/30 hover:bg-gray-800/50"
                        : " bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  >
                    <div className={`p-3 rounded-lg `}>
                      <info.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? " text-gray-500" : " text-gray-600"
                        }`}
                      >
                        {info.label}
                      </div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? " bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : " bg-white/80 border-gray-200 hover:border-gray-300"
                    } ${social.bgColor} ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? " bg-green-500/10 border-green-500/20"
                  : " bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-500">
                  Availabel for Work
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? " text-gray-400" : " text-gray-600"
                }`}
              >
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
              isDarkMode
                ? " bg-gray-800/30 border-gray-700"
                : " bg-gray-50/50 border-gray-200"
            }`}
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p
              className={`${
                isDarkMode ? " text-white/80" : " text-gray-700"
              } mb-6`}
            >
              Sometimes a conversation is worth a thousand messages. Feel free
              to schedule a call to discuss your project.
            </p>
            <motion.a
              href="tel:+84395318514"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? " border-gray-600 hover:border-blue-500 hover:text-blue-400"
                  : " border-gray-300 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

export default ContactSection;
