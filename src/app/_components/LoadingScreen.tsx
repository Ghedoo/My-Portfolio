"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000); // مدة اللودينغ
    return () => clearTimeout(timer);
  }, []);

  const columns = [
    { color: "rgba(8,32,62,0.8)", finalWidth: 25 }, // العمود الأول ربع الشاشة
    { color: "rgba(85,124,147,0.8)", finalWidth: 25 }, // العمود الثاني ربع الشاشة
    { color: "rgba(25,25,25,0.8)", finalWidth: 50 }, // العمود الثالث نصف الشاشة
  ];




  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-start z-50 overflow-hidden"
          style={{
         backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          {columns.map((col, i) => (
            <motion.div
              key={i}
              className="h-full"
              style={{ backgroundColor: col.color,
                borderRadius: "8px",}}
              initial={{ width: 0, x: "-100vw" }}
              animate={{
                x: ["-100vw", "0vw", "0vw", "0vw"],        // يتحرك من خارج الشاشة إلى مكانه
                width: [`0%`, `${col.finalWidth}%`, "100%", "0%"], // يتوسع تدريجيًا ثم يختفي
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.5,  // تأخير تدريجي لكل عمود
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
