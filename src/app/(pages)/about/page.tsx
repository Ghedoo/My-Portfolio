"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, easeOut } from "framer-motion";

import Counter from "@/app/_components/Counter";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "@/app/_components/EducationSection";
import LoadingScreen from "@/app/_components/LoadingScreen";

/* ================= ANIMATIONS ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/* ================= PAGE ================= */
export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ===== Loading Overlay ===== */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* ===== PAGE (دايمًا موجودة) ===== */}
      <section className="min-h-screen bg-[#1c1c1c] text-white px-6 md:px-16 py-24">
        <motion.div
          initial="hidden"
          animate={isLoading ? "hidden" : "show"}
        >
          {/* ===== Title ===== */}
          <motion.h1
            variants={fadeUp}
            className="text-center text-4xl md:text-6xl font-bold mb-20"
          >
            Passion Fuels{" "}
            <span className="text-purple-500">Purpose!</span>
          </motion.h1>

          {/* ===== Main Grid ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
  
  {/* ===== Image (تطلع بعد العنوان على الموبايل) ===== */}
  <motion.div
    variants={scaleIn}
    className="relative flex justify-center order-1 md:order-2"
  >
    {/* Outer Border */}
    <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-purple-500 rounded-xl" />

    {/* Inner Border */}
    <div className="relative border-2 border-white rounded-xl p-2 bg-[#1c1c1c]">
      <Image
        src="/images/developer-pic-2 (2).jpg"
        alt="About Image"
        width={400}
        height={400}
        className="rounded-lg"
      />
    </div>
  </motion.div>

  {/* ===== Text ===== */}
 <motion.div
  variants={fadeLeft}
  className="space-y-6 text-center md:text-left order-2 md:order-1"
>
    <h2 className="text-2xl font-semibold">
      Turning ideas into digital experiences
    </h2>

    <p className="text-zinc-300">
      I am a passionate front-end developer, eager to build clean, interactive, and smooth web experiences.
    </p>

    <p className="text-zinc-300">
      I focus on designing attractive and user-friendly interfaces, with solid backend logic when needed.
    </p>

    <p className="text-zinc-300">
      Every project I work on is driven by creativity, precision, and the goal of enhancing the user experience.
    </p>
  </motion.div>

  {/* ===== Stats ===== */}
  <motion.div
    variants={fadeUp}
    className="space-y-12 order-3"
  >
    <Counter value={40} label="Satisfied Clients" />
    <Counter value={50} label="Projects Completed" />
    <Counter value={4} label="Years of Experience" />
  </motion.div>

</div>
        </motion.div>
      </section>

      {/* ===== Other Sections (بدون تأثير اللودينغ) ===== */}
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
