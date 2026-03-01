"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HireMeNavbar() {
  const buttonSize = 34;
  const circleSize = 90;

  return (
    <a
     href="https://mail.google.com/mail/?view=cm&fs=1&to=raghedalkadre997@gmail.com&su=Hello&body=Hi%20there!"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center px-0.5 mt-0.5"
       
    
    >
      {/* الدائرة الدوارة */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: circleSize, height: circleSize }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <Image
          src="/images/circular-text.png"
          alt="Hire Me"
          width={circleSize}
          height={circleSize}
          className="select-none opacity-90 "
        />
      </motion.div>

      {/* الزر */}
      <div
        style={{ width: buttonSize, height: buttonSize }}
        className="
          relative
          flex items-center justify-center *
         px-0.5
          rounded-full
          text-white
          text-[14px]
          font-bold
        "
      >
        Hire Me
      </div>
    </a>
  );
}