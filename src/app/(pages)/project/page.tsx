"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion, Variants, easeOut, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/app/_components/LoadingScreen";
import { useEffect, useState } from "react";

/* ================= TYPES ================= */
interface Project {
  title: string;
  type: string;
  description: string;
  img: string;
  link?: string;
  large?: boolean;
}

/* ================= ANIMATIONS ================= */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut, delay: i * 0.2 },
  }),
};

/* ================= DATA ================= */
const projects: Project[] = [
  {
    title: "Modern E-Commerce Website",
    type: "Featured Project",
    description:
      "A modern and scalable E-Commerce front-end application built with React and Tailwind CSS, including advanced product filtering, cart and checkout UI, admin dashboard interface, global state management, and a clean, responsive user experience.",
    img: "/images/projects/shopemart.png",
    link: " https://shopmart-beryl.vercel.app",
    large: true,
  },
  {
    title: "Modern Weather Application",
    type: "Project",
    description:
      "A scalable and responsive weather front-end application developed with React, featuring live weather data, city-based search, dynamic UI states, and a minimal, user-focused design. It's built to be easy to use and provides a seamless experience for users.",
    img: "/images/projects/we.png",
    link: "https://ghedoo.github.io/weather"
  },
  {
    title: "Dev Portfolio Website",
    type: "Project",
    description:
      "A personal developer portfolio website built with HTML, CSS, and JavaScript, featuring responsive layouts, smooth navigation between sections, and clear presentation of skills, projects, and contact details.",
    img: "/images/projects/devtol.png",
    link: "https://ghedoo.github.io/raghedoo-devfolio"
  },
  {
    title: "Personal Portfolio Website (Fokir Template)",
    type: "Featured Project",
    description:
      "Developed a responsive personal portfolio website using HTML, CSS, and JavaScript, featuring structured sections, smooth navigation, and mobile-friendly design.",
    img: "/images/projects/fokir.png",
    link: "https://ghedoo.github.io/Ragheedo-Fokir",
    large: true,
  },
  {
    title: "User Login Interface",
    type: "Project",
    description:
      "A responsive user login interface built with HTML, CSS, and JavaScript. The project focuses on form validation, clean UI design, and intuitive user experience suitable for authentication pages.",
    img: "/images/projects/login.png",
    link: "https://ghedoo.github.io/login"
  },
  {
    title: "Store Management System UI",
    type: "Project",
    description:
      "A front-end Store Management System interface built with HTML, CSS, and JavaScript. The project features dashboard layouts, product listings, sales overview sections, and clean UI design focused on usability and responsive behavior.",
    img: "/images/projects/stor.png",
    link: "https://ghedoo.github.io/Store-Managment-System"
  },
];

/* ================= CARD ================= */
const ProjectCard = ({ proj, index }: { proj: Project; index: number }) => {
  const large = proj.large ?? false;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      className="relative w-full"
    >
      <div className="absolute top-3 left-2 w-full h-full border border-purple-500 rounded-lg pointer-events-none" />

      <div
        className={`relative bg-[#111] border border-black rounded-lg p-2 overflow-hidden ${
          large ? "md:flex md:gap-6" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`relative w-full ${
            large ? "h-56 md:h-64 md:w-1/2" : "h-36 md:h-44"
          }`}
        >
          <Image
            src={proj.img}
            alt={proj.title}
            fill
            className="object-cover rounded-md"
          />
        </motion.div>

        {/* Content */}
        <div
          className={`p-3 md:p-5 flex flex-col justify-center ${
            large ? "md:w-1/2" : ""
          }`}
        >
          <p className="text-cyan-400 text-xl font-semibold">{proj.type}</p>

          <h3 className="text-gray-300 text-2xl font-bold my-1">
            {proj.title}
          </h3>

          <p className="text-gray-400 text-sm mb-3">{proj.description}</p>

          <div className="mt-auto flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl" />
            </a>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-1.5 rounded hover:bg-gray-200 transition"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= SECTION ================= */
export default function ProjectsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <section className="w-full bg-[#1c1c1c] text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-extrabold text-center mb-16 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Imagination Trumps Knowledge!
          </motion.h2>

          {!isLoading && (
            <div className="flex flex-col space-y-12">
              <ProjectCard proj={projects[0]} index={0} />

              <div className="grid md:grid-cols-2 gap-5">
                <ProjectCard proj={projects[1]} index={1} />
                <ProjectCard proj={projects[2]} index={2}  />
              </div>

              <ProjectCard proj={projects[3]} index={3} />

              <div className="grid md:grid-cols-2 gap-7">
                <ProjectCard proj={projects[4]} index={4} />
                <ProjectCard proj={projects[5]} index={5} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
