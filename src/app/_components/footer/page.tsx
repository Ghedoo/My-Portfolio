"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
 className="
  w-full border-t border-zinc-300 dark:border-zinc-700
  bg-zinc-50 dark:bg-[#1c1c1c]
  py-6  /* ارتفاع ثابت */
  flex flex-col md:flex-row justify-between
  items-center text-zinc-700 dark:text-zinc-300
  text-sm gap-4 px-6 md:px-16 mt-auto
" 

      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Copyright */}
      <div className="text-2xl">2026 © All Rights Reserved.</div>

      {/* Built by */}
      <div className="flex items-center gap-1 text-2xl">
        Built with ♡ by{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500 text-2xl transition flex items-center gap-3"
        >
          CodeBucks <FaGithub />
        </a>
      </div>

      {/* Contact */}
      <div className="flex items-center gap-3 text-2xl">
        <a
          href="mailto:ragheedalkadre997@gmail.com"
          className="underline hover:text-purple-500 transition flex items-center text-2xl gap-3"
        >
          Say Hello <FaEnvelope />
        </a>
      </div>
    </motion.footer>
  );
}
