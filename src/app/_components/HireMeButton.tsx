"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  size?: number;
  circular?: boolean;
  position?: "hero" | "navbar";
  className?: string;
}

export default function HireMeButton({
  size = 110, // كبّرنا الزر
  circular = true,
  position = "hero",
  className = "",
}: Props) {
  const buttonSize = size;
  const circleSize = size * 2.7; // الدائرة أكبر بوضوح

  return (
    <motion.a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=raghedalkadre997@gmail.com&su=Hello&body=Hi%20there!"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-center mb-8 px-8 ${className}`}
       
      whileHover={{ scale: position === "hero" ? 1.05 : 1 }}
    >
      {/* الدائرة الدوارة */}
      {circular && position === "hero" && (
        <motion.div
          className="absolute flex items-center justify-center origin-center"
          style={{ width: circleSize, height: circleSize }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <Image
            src="/images/circular-text.png"
            alt="Hire Me"
            width={circleSize}
            height={circleSize}
            className="pointer-events-none select-none"
          />
        </motion.div>
      )}

      {/* الزر */}
      <div
        style={{ width: buttonSize, height: buttonSize }}
        className="
          relative z-10
          flex items-center justify-center
          rounded-full
          bg-white text-black
          font-semibold
          text-base
          transition-colors
          hover:bg-black hover:text-white
        "
      >
        Hire Me
      </div>
    </motion.a>
  );
}
