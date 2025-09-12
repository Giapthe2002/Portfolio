import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { UseTheme } from "../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../utils/data";
import { containerVariants, itemVariants } from "../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = UseTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Backgound Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
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
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            <span className="text-blue-500 font-medium">Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hiddne"}
          variants={containerVariants}
          className="mt-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-medium mb-4">Also Working With</h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2, scale: 1.05 }}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
