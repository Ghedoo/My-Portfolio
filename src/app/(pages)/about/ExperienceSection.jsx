"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer @Google",
    date: "2022-Present | Mountain View, CA",
    description:
      "Worked on a team responsible for developing new features for Google's search engine.",
  },
  {
    title: "Intern @Facebook",
    date: "Summer 2021 | Menlo Park, CA",
    description:
      "Worked on a new mobile app feature allowing users to create and share short-form video content.",
  },
  {
    title: "Software Developer @Amazon",
    date: "2020-2021 | Seattle, WA",
    description:
      "Implemented new features such as product recommendations and optimized app performance.",
  },
  {
    title: "Software Developer Intern @Microsoft",
    date: "Summer 2019 | Redmond, WA",
    description:
      "Contributed to backend features and interface improvements for internal tools.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);

  /* scroll progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* vertical line */
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  /* dot fills */
  const dotFills = [
    useTransform(scrollYProgress, [0, 0.25], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
    useTransform(scrollYProgress, [0.75, 1], [0, 1]),
  ];

  /* pulse scale for dots (defined ONCE) */
  const dotScales = [
    useTransform(dotFills[0], [0.95, 1], [1, 1.4]),
    useTransform(dotFills[1], [0.95, 1], [1, 1.4]),
    useTransform(dotFills[2], [0.95, 1], [1, 1.4]),
    useTransform(dotFills[3], [0.95, 1], [1, 1.4]),
  ];

  return (
    <section className="relative min-h-screen bg-[#1c1c1c] flex flex-col items-center py-32 px-8">
      <h2 className="text-6xl font-bold text-white mb-20 text-center">
        Experience
      </h2>

      <div ref={ref} className="relative w-full max-w-3xl">
        {/* vertical line */}
        <motion.div
          className="absolute top-0 left-8 w-1 h-full rounded"
          style={{
            scaleY,
            transformOrigin: "top",
            background: "linear-gradient(to bottom, #06b6d4, #22d3ee)",
            boxShadow: "0 0 10px #06b6d4, 0 0 20px #22d3ee",
          }}
        />

        <div className="flex flex-col space-y-32">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* dot */}
              <div className="absolute left-8 -translate-x-1/2 w-6 h-6 border-2 border-cyan-400 rounded-full z-10 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-cyan-400"
                  style={{ scale: dotFills[index] }}
                />
                <motion.div
                  className="absolute w-4 h-4 rounded-full bg-cyan-400 opacity-40"
                  style={{ scale: dotScales[index] }}
                />
              </div>

              {/* text (only entry animation) */}
              <motion.div
                className="ml-16 pl-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.title}
                </h3>
                <p className="text-cyan-400 mb-2">{exp.date}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
