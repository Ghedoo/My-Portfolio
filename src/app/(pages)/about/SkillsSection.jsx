"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define skills for each screen size
const allSkills = {
  mobile: [
    { name: "Web", center: true, color: "#8b5cf6" },
    { name: "HTML", x: "20%", y: "45%", color: "#e44d26" },
    { name: "CSS", x: "40%", y: "25%", color: "#264de4" },
    {name: "JavaScript",x: "65%", y: "50%",color: "#f7df1e",textColor: "#000",},
    {name: "ReactJS",x: "40%",y: "70%", color: "#61dafb", textColor: "#000",},
    { name: "NextJS", x: "15%", y: "20%", color: "#000000" },
    { name: "GatsbyJS", x: "70%", y: "25%", color: "#663399" },
    { name: "Figma", x: "48%", y: "-7%", color: "#f24e1e" },
    { name: "Github", x: "-15%", y: "50%", color: "#181717" },
    { name: "Firebase", x: "15%", y: "80%", color: "#ffa611" },
    { name: "Tailwind CSS", x: "85%", y: "75%", color: "#06b6d4" },
    { name: "Web Design", x: "90%", y: "50%", color: "#ec4899" },
  ],
  tablet: [
    { name: "Web", center: true, color: "#8b5cf6" },
    { name: "HTML", x: "25%", y: "50%", color: "#e44d26" },
    { name: "CSS", x: "45%", y: "25%", color: "#264de4" },
    {  name: "JavaScript",  x: "70%",   y: "55%", color: "#f7df1e", textColor: "#000",
    },
    {
      name: "ReactJS",
      x: "45%",
      y: "75%",
      color: "#61dafb",
      textColor: "#000",
    },
    { name: "NextJS", x: "15%", y: "20%", color: "#000000" },
    { name: "GatsbyJS", x: "75%", y: "25%", color: "#663399" },
    { name: "Figma", x: "50%", y: "6%", color: "#f24e1e" },
    { name: "Github", x: "6%", y: "50%", color: "#181717" },
    { name: "Firebase", x: "18%", y: "85%", color: "#ffa611" },
    { name: "Tailwind CSS", x: "88%", y: "75%", color: "#06b6d4" },
    { name: "Web Design", x: "90%", y: "50%", color: "#ec4899" },
  ],
  desktop: [
    { name: "Web", center: true, color: "#8b5cf6" },
    { name: "HTML", x: "25%", y: "50%", color: "#e44d26" },
    { name: "CSS", x: "45%", y: "25%", color: "#264de4" },
    {
      name: "JavaScript",
      x: "70%",
      y: "55%",
      color: "#f7df1e",
      textColor: "#000",
    },
    {
      name: "ReactJS",
      x: "45%",
      y: "75%",
      color: "#61dafb",
      textColor: "#000",
    },
    { name: "NextJS", x: "15%", y: "20%", color: "#000000" },
    { name: "GatsbyJS", x: "75%", y: "25%", color: "#663399" },
    { name: "Figma", x: "50%", y: "6%", color: "#f24e1e" },
    { name: "Github", x: "6%", y: "50%", color: "#181717" },
    { name: "Firebase", x: "18%", y: "85%", color: "#ffa611" },
    { name: "Tailwind CSS", x: "88%", y: "75%", color: "#06b6d4" },
    { name: "Web Design", x: "90%", y: "50%", color: "#ec4899" },
  ],
};

export default function SkillsSection() {
  const [skills, setSkills] = useState(allSkills.desktop);
  const [rings, setRings] = useState([150, 300, 450]);

  // Responsive: update skills + rings
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSkills(allSkills.mobile);
        setRings([60, 120, 180]);
      } else if (width < 1024) {
        setSkills(allSkills.tablet);
        setRings([90, 180, 270]);
      } else {
        setSkills(allSkills.desktop);
        setRings([150, 300, 450]);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section className="relative bg-[#1c1c1c] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16">
        Skills
      </h2>

      {/* Orbit Container */}
      <div
        className="
          relative
          w-80 h-80
          sm:w-112.5 sm:h-112.5
          lg:w-162.5 lg:h-162.5
        "
      >
        {/* Rings */}
        {rings.map((size, i) => (
          <div
            key={i}
            className="absolute inset-1/2 border border-white/20 rounded-full"
            style={{
              width: size * 2,
              height: size * 2,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Skills */}
        {skills.map((skill, index) =>
          skill.center ? (
            <div
              key={index}
              className="
                absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
                w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                rounded-full flex items-center justify-center
                font-semibold shadow-lg
                text-xs sm:text-sm
              "
              style={{
                backgroundColor: skill.color,
                color: skill.textColor || "#fff",
              }}
            >
              {skill.name}
            </div>
          ) : (
            <motion.div
              key={index}
              className="
                absolute rounded-full font-medium shadow-lg
                px-3 py-1.5 sm:px-5 sm:py-2.5
                text-[10px] sm:text-xs lg:text-sm
              "
              style={{
                left: skill.x,
                top: skill.y,
                transform: "translate(-50%, -50%)",
                backgroundColor: skill.color,
                color: skill.textColor || "#fff",
              }}
              initial={{ left: "50%", top: "50%", scale: 0, opacity: 0 }}
              whileInView={{
                left: skill.x,
                top: skill.y,
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 + index * 0.1, ease: "easeOut" }}
            >
              {skill.name}
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
