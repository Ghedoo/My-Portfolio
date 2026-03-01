"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const education = [
  {
    title: "Bachelor Of Science In Computer Science",
    date: "2016-2020 | Massachusetts Institute Of Technology (MIT)",
    description:
      "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
  },
  {
    title: "Master Of Computer Science",
    date: "2020-2022 | Stanford University",
    description:
      "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
  },
  {
    title: "Online Coursework",
    date: "2016-2020 | Coursera And EdX",
    description:
      "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
  },
];

export default function EducationSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Circular rotation for each dot
  const dot1 = useTransform(scrollYProgress, [0, 0.33], [-90, 270]);
  const dot2 = useTransform(scrollYProgress, [0.33, 0.66], [-90, 270]);
  const dot3 = useTransform(scrollYProgress, [0.66, 1], [-90, 270]);

  const dots = [dot1, dot2, dot3];

  return (
    <section className="relative min-h-screen bg-[#1c1c1c] py-32 px-8">
      <h2 className="text-6xl font-bold text-white mb-20 text-center">
        Education
      </h2>

      <div ref={ref} className="relative w-full max-w-4xl mx-auto">
        {/* Vertical timeline */}
        <motion.div
          className="absolute top-0 left-10 w-1 h-full rounded"
          style={{
            scaleY,
            transformOrigin: "top",
            background: "linear-gradient(to bottom, #22c55e, #4ade80)",
            boxShadow: "0 0 15px #22c55e, 0 0 30px #4ade80",
          }}
        />

        <div className="flex flex-col space-y-32">
          {education.map((edu, index) => (
            <div key={index} className="relative flex items-start">
              {/* Dot circular fill */}
              <div className="absolute left-10 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-emerald-400 bg-[#1c1c1c] z-20 overflow-hidden flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(#4ade80 0deg, #4ade80 360deg)",
                    rotate: dots[index], // MotionValue مباشرة
                    maskImage: "radial-gradient(circle, black 60%, transparent 61%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, black 60%, transparent 61%)",
                  }}
                />
              </div>

              {/* Text animation */}
              <motion.div
                className="ml-20 pl-8 max-w-3xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {edu.title}
                </h3>
                <p className="text-emerald-400 mb-2">{edu.date}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
