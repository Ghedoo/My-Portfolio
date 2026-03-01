"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import LoadingScreen from "@/app/_components/LoadingScreen";
import HireMeButton from "@/app/_components/HireMeButton";

/* Animations */
const letterAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
};

const wordAnimation = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const title = "Turning Vision Into Reality With Code And Design.".split(" ");

  const paragraph =
    "I turn ideas into innovative and engaging web experiences, making user interactions enjoyable and seamless. Explore my projects and articles to see my creative touch in web design and development."
     

    
  return (
    <>
      <LoadingScreen />

      <section className="relative min-h-svh bg-zinc-50 dark:bg-[#1c1c1c] overflow-hidden  pt-15 md:pt-32">
        <div className="max-w-7xl mx-auto min-h-svh flex items-center px-4 sm:px-6 md:px-16">
          <div className="w-full flex flex-col md:flex-row items-center gap-10">
            {/* ===== IMAGE ===== */}
   <motion.div
  className="
    order-1
    w-full md:w-1/2
    flex justify-center md:justify-start
    -translate-y-5 md:-translate-y-25 mt-12 md:mt-0
  "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Image
    src="/images/developer-pic-1.png"
    alt="Hero Image"
    width={620}
    height={620}
    priority
    className="w-80 sm:w-96 md:w-full h-auto"
  />
</motion.div>

            {/* ===== TEXT ===== */}
            <div className="order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3">
              {/* Title */}
              <motion.h1
                className="
                  text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                  font-bold
                  text-black dark:text-white
                  flex flex-wrap
                  justify-center md:justify-start
                  gap-2
                  
    max-w-108
    sm:max-w-120
    md:max-w-lg
    lg:max-w-none
                "
                initial="hidden"
                animate="visible"
              >
                {title.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordAnimation}
                    className="inline-flex"
                  >
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        variants={letterAnimation}
                        whileHover={{ y: -3, color: "#6366f1" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Paragraph (Animated like title) */}
              <motion.p
                className="
                  text-lg sm:text-xl md:text-lg lg:text-xl
                  text-zinc-700 dark:text-zinc-300
                 max-w-108

                  leading-relaxed
                  flex flex-wrap gap-1
                  items-center justify-center
                  pt-2
                "
                initial="hidden"
                animate="visible"
              >
                {paragraph.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordAnimation}
                    className="inline-flex"
                  >
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        variants={letterAnimation}
                        whileHover={{ y: -2, color: "#6366f1" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span> </span>
                  </motion.span>
                ))}
              </motion.p>

              {/* Buttons */}
           <motion.div
  className="flex gap-4 mt-1 py-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <a
    href="/dummy.pdf"
    download
    className="
      px-6 py-3 text-xl           /* حجم الموبايل */
      md:px-10 md:py-6 md:text-2xl /* حجم الشاشات المتوسطة والكبيرة */
      bg-black text-white rounded-full
      transition-transform duration-300
      hover:scale-100 md:hover:scale-110 /* تكبير الزر عند الهوف على الديسكتوب أكبر */
      hover:bg-gray-700
    "
  >
    Resume ↗
  </a>

  <a
      href="mailto:ragheedalkadre997@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    onClick={() => setIsOpen(true)}
    className="
      px-6 py-3 text-xl
      md:px-10 md:py-6 md:text-2xl
      border border-black dark:border-white rounded-full
      transition-transform duration-300
      hover:scale-105 md:hover:scale-110
      hover:bg-gray-100 dark:hover:bg-zinc-800
    "
  >
    Contact
  </a>
</motion.div>
            </div>
          </div>
        </div>

        {/* ===== Floating Hire Me (Desktop Only) ===== */}
        <div className="hidden lg:block fixed bottom-6 left-6 ">
          <HireMeButton size={80} circular position="hero" />
        </div>

        {/* <div className="hidden lg:block fixed bottom-6 left-6 w-40 h-40 z-50">
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <Image
                src="/images/circular-text.png"
                alt="Hire Me"
                width={260}
                height={260}
                className="pointer-events-none"
              />
            </motion.div>

            <a
              href="mailto:ragheedalkadre997@gmail.com"
              className="
                relative z-10 w-20 h-20 flex items-center justify-center
                rounded-full bg-white text-black font-semibold
                hover:bg-black hover:text-white transition
              "
            >
              Hire Me
            </a>
          </motion.div>
        </div> */}

        {/* ===== Decorative Bottom Right (Desktop Only) ===== */}
        <motion.div
          className="hidden lg:block absolute bottom-10 right-10 pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/miscellaneous_icons_1.svg"
            alt="decorative"
            width={120}
            height={120}
            className="w-28 h-auto"
          />
        </motion.div>
      </section>
    </>
  );
}

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import LoadingScreen from "./_Components/LoadingScreen";
// import HireMeButton from "./_Components/HireMeButton";

// /* Animations */
// const letterAnimation = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
// };

// const wordAnimation = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.04 } },
// };

// export default function Hero() {
//   const [isOpen, setIsOpen] = useState(false);

//   const title =
//     "Turning Vision Into Reality With Code And Design.".split(" ");

//   const paragraph =
//     "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.";

//   return (
//     <>
//       <LoadingScreen />

//       <section className="relative min-h-[100svh] bg-zinc-50 dark:bg-[#1c1c1c] overflow-hidden">
//         <div className="max-w-7xl mx-auto min-h-[100svh] flex items-center px-4 sm:px-6 md:px-16">
//           <div className="w-full flex flex-col md:flex-row items-center gap-10">

//             {/* ===== IMAGE ===== */}
//             <motion.div
//               className="
//                 order-1
//                 w-full md:w-1/2
//                 flex justify-center md:justify-start
//                 translate-y-6 md:translate-y-0
//                mt-16
//               "
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Image
//                 src="/images/developer-pic-1.png"
//                 alt="Hero Image"
//                 width={620}
//                 height={620}
//                 priority
//                 className="
//                   w-[400px] sm:w-[360px] md:w-[420px] lg:w-[520px]
//                   h-auto
//                 "
//               />
//             </motion.div>

//             {/* ===== TEXT ===== */}
//             <div className="order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3">

//               {/* Title */}
//               <motion.h1
//                 className="
//                   text-4xl sm:text-5xl md:text-5xl lg:text-6xl
//                   font-bold
//                   text-black dark:text-white
//                   flex flex-wrap
//                   justify-center md:justify-start
//                   gap-2

//     max-w-[27rem]
//     sm:max-w-[30rem]
//     md:max-w-[32rem]
//     lg:max-w-none
//                 "
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {title.map((word, i) => (
//                   <motion.span key={i} variants={wordAnimation} className="inline-flex">
//                     {word.split("").map((char, j) => (
//                       <motion.span
//                         key={j}
//                         variants={letterAnimation}
//                         whileHover={{ y: -3, color: "#6366f1" }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         {char}
//                       </motion.span>
//                     ))}
//                   </motion.span>
//                 ))}
//               </motion.h1>

//               {/* Paragraph (Animated like title) */}
//               <motion.p
//                 className="
//                   text-lg sm:text-xl md:text-lg lg:text-xl
//                   text-zinc-700 dark:text-zinc-300
//                  max-w-108

//                   leading-relaxed
//                   flex flex-wrap gap-1
//                   items-center justify-center
//                   pt-2
//                 "
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {paragraph.split(" ").map((word, i) => (
//                   <motion.span key={i} variants={wordAnimation} className="inline-flex">
//                     {word.split("").map((char, j) => (
//                       <motion.span
//                         key={j}
//                         variants={letterAnimation}
//                         whileHover={{ y: -2, color: "#6366f1" }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         {char}
//                       </motion.span>
//                     ))}
//                     <span> </span>
//                   </motion.span>
//                 ))}
//               </motion.p>

//               {/* Buttons */}
//               <motion.div
//                 className="flex gap-4 mt-2 py-10"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
//                 <a
//                   href="/dummy.pdf"
//                   download
//                   className="px-8 py-4  bg-black text-white text-2xl rounded-full hover:bg-gray-800 transition

//                   "
//                 >
//                   Resume ↗
//                 </a>

//                 <button
//                   onClick={() => setIsOpen(true)}
//                   className="px-8 py-4 border border-black text-2xl dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
//                 >
//                   Contact
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Floating Hire Me (Desktop Only) ===== */}
//    <div className="hidden lg:block fixed bottom-6 left-6 z-50">
//   <HireMeButton size={80} circular position="hero" />
// </div>

//         {/* <div className="hidden lg:block fixed bottom-6 left-6 w-40 h-40 z-50">
//           <motion.div
//             className="relative w-full h-full flex items-center justify-center"
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <motion.div
//               className="absolute inset-0"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//             >
//               <Image
//                 src="/images/circular-text.png"
//                 alt="Hire Me"
//                 width={260}
//                 height={260}
//                 className="pointer-events-none"
//               />
//             </motion.div>

//             <a
//               href="mailto:ragheedalkadre997@gmail.com"
//               className="
//                 relative z-10 w-20 h-20 flex items-center justify-center
//                 rounded-full bg-white text-black font-semibold
//                 hover:bg-black hover:text-white transition
//               "
//             >
//               Hire Me
//             </a>
//           </motion.div>
//         </div> */}

//         {/* ===== Decorative Bottom Right (Desktop Only) ===== */}
//         <motion.div
//           className="hidden lg:block absolute bottom-10 right-10 pointer-events-none"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 0.8, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <Image
//             src="/images/miscellaneous_icons_1.svg"
//             alt="decorative"
//             width={120}
//             height={120}
//             className="w-28 h-auto"
//           />
//         </motion.div>
//       </section>
//     </>
//   );
// }

//   //   respnsevr
// //   "use client";

// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { useState } from "react";
// // import LoadingScreen from "./_Components/LoadingScreen";

// // /* Animations */
// // const letterAnimation = {
// //   hidden: { x: -10, opacity: 0 },
// //   visible: { x: 0, opacity: 1, transition: { duration: 0.25 } },
// // };

// // const wordAnimation = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.04 } },
// // };

// // export default function Hero() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const title = "Turning Vision Into Reality With Code And Design.".split(" ");
// //   const paragraph =
// //     "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.";

// //   return (
// //     <>
// //       <LoadingScreen />

// //       <section className="relative min-h-[100svh] bg-zinc-50 dark:bg-[#1c1c1c] overflow-hidden">
// //         <div className="max-w-7xl mx-auto min-h-[100svh] flex items-center px-4 sm:px-6 md:px-16">
// //           <div className="w-full flex flex-col md:flex-row items-center gap-10">

// //             {/* ===== IMAGE (FIRST on Mobile / LEFT on Desktop) ===== */}
// //             <motion.div
// //               className="order-1 w-full md:w-1/2 flex justify-center md:justify-start"
// //               initial={{ y: 40, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <Image
// //                 src="/images/developer-pic-1.png"
// //                 alt="Hero Image"
// //                 width={620}
// //                 height={620}
// //                 priority
// //                 className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] h-auto"
// //               />
// //             </motion.div>

// //             {/* ===== TEXT CONTENT ===== */}
// //             <div className="order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">

// //               {/* Title */}
// //               <motion.h1
// //                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white flex flex-wrap justify-center md:justify-start gap-2"
// //                 initial="hidden"
// //                 animate="visible"
// //               >
// //                 {title.map((word, i) => (
// //                   <motion.span key={i} variants={wordAnimation} className="inline-flex">
// //                     {word.split("").map((char, j) => (
// //                       <motion.span
// //                         key={j}
// //                         variants={letterAnimation}
// //                         whileHover={{ y: -3, color: "#6366f1" }}
// //                         transition={{ type: "spring", stiffness: 300 }}
// //                       >
// //                         {char}
// //                       </motion.span>
// //                     ))}
// //                   </motion.span>
// //                 ))}
// //               </motion.h1>

// //               {/* Paragraph */}
// //               <motion.p
// //                 className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl"
// //                 initial="hidden"
// //                 animate="visible"
// //               >
// //                 {paragraph}
// //               </motion.p>

// //               {/* Buttons */}
// //               <motion.div
// //                 className="flex gap-4 mt-2"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ duration: 0.8, delay: 0.6 }}
// //               >
// //                 <a
// //                   href="/dummy.pdf"
// //                   download
// //                   className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
// //                 >
// //                   Resume ↗
// //                 </a>

// //                 <button
// //                   onClick={() => setIsOpen(true)}
// //                   className="px-6 py-3 border border-black dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
// //                 >
// //                   Contact
// //                 </button>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== FLOATING HIRE ME (DESKTOP ONLY) ===== */}
// //         <div className="hidden lg:block fixed bottom-6 left-6 w-40 h-40 z-50">
// //           <motion.div
// //             className="relative w-full h-full flex items-center justify-center"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //           >
// //             <motion.div
// //               className="absolute inset-0 flex items-center justify-center"
// //               animate={{ rotate: 360 }}
// //               transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
// //             >
// //               <Image
// //                 src="/images/circular-text.png"
// //                 alt="Hire Me"
// //                 width={260}
// //                 height={260}
// //                 className="select-none pointer-events-none"
// //               />
// //             </motion.div>

// //             <a
// //               href="https://mail.google.com/mail/?view=cm&fs=1&to=ragheedalkadre997@gmail.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="relative z-10 w-20 h-20 flex items-center justify-center
// //                          rounded-full bg-white text-black text-sm font-semibold
// //                          hover:bg-black hover:text-white transition"
// //             >
// //               Hire Me
// //             </a>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // ex
// // "use client";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { useState } from "react";

// // const letterAnimation = {
// //   hidden: { x: -10, opacity: 0 },
// //   visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
// // };

// // const wordAnimation = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.05 } },
// // };

// // export default function Hero() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const title = "Turning Vision Into Reality With Code And Design. ".split(" ");
// // const paragraph = "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.".split(" ");

// //   return (
// //     <section className="h-screen flex items-center justify-center bg-zinc-50 dark:bg-[#1c1c1c] px-8 md:px-32 relative">

// //       <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-10 ">

// //         {/* الصورة على اليسار */}
// //         <motion.div
// //           className="w-full md:w-2/3 flex justify-center md:justify-start -translate-y-8"
// //           initial={{ y: 50, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <Image
// //             src="/images/developer-pic-1.png"
// //             alt="Profile Hero"
// //             width={650}
// //             height={650}
// //             // className="rounded-xl shadow-lg"
// //             priority
// //           />
// //         </motion.div>

// //         {/* النص على اليمين */}
// //         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-5 ">

// //           {/* العنوان: حروف متدرجة + Hover */}
// //           <motion.h1
// //             className="text-3xl md:text-4xl font-bold text-white dark:text-shadow-gray-950 flex flex-wrap gap-2 cursor-default"
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {title.map((word, i) => (
// //               <motion.span
// //                 key={i}
// //                 variants={wordAnimation}
// //                 className="inline-flex"
// //                 whileHover={{ scale: 1.05 }} // optional slight scale on word hover
// //               >
// //                 {word.split("").map((char, j) => (
// //                   <motion.span
// //                     key={j}
// //                     variants={letterAnimation}
// //                     whileHover={{ y: -3, color: "#6366f1" }} // يتحرك ويغير اللون عند hover
// //                     transition={{ type: "spring", stiffness: 300 }}
// //                   >
// //                     {char}
// //                   </motion.span>
// //                 ))}
// //               </motion.span>
// //             ))}
// //           </motion.h1>

// //           {/* الفقرة: حروف متدرجة + Hover */}
// //           <motion.p
// //             className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg flex flex-wrap gap-1 cursor-default"
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {paragraph.map((word, i) => (
// //               <motion.span
// //                 key={i}
// //                 variants={wordAnimation}
// //                 className="inline-flex"
// //               >
// //                 {word.split("").map((char, j) => (
// //                   <motion.span
// //                     key={j}
// //                     variants={letterAnimation}
// //                     whileHover={{ y: -2, color: "#6366f1" }}
// //                     transition={{ type: "spring", stiffness: 300 }}
// //                   >
// //                     {char}
// //                   </motion.span>
// //                 ))}
// //                 <span> </span>
// //               </motion.span>
// //             ))}
// //           </motion.p>

// // {isOpen && (
// //   <motion.div
// //     className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
// //     initial={{ opacity: 0 }}
// //     animate={{ opacity: 1 }}
// //     exit={{ opacity: 0 }}
// //     onClick={() => setIsOpen(false)}
// //   >
// //     <motion.div
// //       className="bg-white dark:bg-zinc-900 rounded-2xl p-8 w-full max-w-md relative"
// //       initial={{ scale: 0.8, y: 50 }}
// //       animate={{ scale: 1, y: 0 }}
// //       transition={{ type: "spring", stiffness: 200 }}
// //       onClick={(e) => e.stopPropagation()}
// //     >
// //       {/* Close */}
// //       <button
// //         onClick={() => setIsOpen(false)}
// //         className="absolute top-4 right-4 text-zinc-500 hover:text-black dark:hover:text-white"
// //       >
// //         ✕
// //       </button>

// //       <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
// //         Contact Me
// //       </h2>

// //       <p className="text-zinc-600 dark:text-zinc-300 mb-6">
// //         Feel free to reach out via email 👇
// //       </p>

// //       {/* Email Button */}
// //       <a
// //         href="https://mail.google.com/mail/?view=cm&fs=1&to=ragheedalkadre997@gmail.com"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="block text-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
// //       >
// //         Send Email
// //       </a>
// //     </motion.div>
// //   </motion.div>
// // )}

// //          {/* الأزرار */}
// // <motion.div
// //   className="flex gap-4 mt-4"
// //   initial={{ x: -50, opacity: 0 }}
// //   animate={{ x: 0, opacity: 1 }}
// //   transition={{ duration: 0.8, delay: 1.5 }}
// // >
// //   {/* Download PDF */}
// //   <a
// //     href="/dummy.pdf"
// //     download
// //     className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
// //   >
// //     Download CV
// //   </a>

// //   {/* Open Modal */}
// //   <button
// //     onClick={() => setIsOpen(true)}
// //     className="px-6 py-3 border border-black rounded-full hover:bg-gray-100 dark:border-white dark:hover:bg-zinc-800 transition"
// //   >
// //     Contact Me
// //   </button>
// // </motion.div>

// //         </div>

// //       </div>
// //       {/* Floating Hire Me */}
// // <div className="absolute bottom-6 left-6 w-40 h-40 flex items-center justify-center">

// //   {/* الصورة + الزر داخل نفس Motion div */}
// //   <motion.div
// //     className="relative w-full h-full flex items-center justify-center"
// //     initial={{ opacity: 0, y: 20 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 1.2 }}
// //   >
// //     {/* الصورة الدوارة مع ترنح */}
// //     <motion.div
// //       className="absolute inset-0 flex items-center justify-center"
// //       animate={{ rotate: 360, y: [0, -5, 0, 5, 0] }}
// //       transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
// //     >
// //       <Image
// //         src="/images/circular-text.png"
// //         alt="Hire Me"
// //         width={260}
// //         height={260}
// //         className="w-70 h-auto select-none pointer-events-none"
// //       />
// //     </motion.div>

// //     {/* الزر في منتصف الصورة مع نفس حركة الترنح */}
// //     <motion.a
// //       href="https://mail.google.com/mail/?view=cm&fs=1&to=ragheedalkadre997@gmail.com"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       animate={{ y: [0, -5, 0, 5, 0] }}
// //       transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
// //       className="
// //         relative z-10
// //         w-20 h-20
// //         flex items-center justify-center
// //         rounded-full
// //         bg-zinc-900 text-white
// //         text-sm font-semibold
// //         shadow-xl
// //         hover:bg-black hover:scale-105
// //         transition
// //       "
// //     >
// //       Hire Me
// //     </motion.a>
// //   </motion.div>

// // </div>

// // {/* Decorative Shape - Bottom Right مع دخول تدريجي */}
// // <motion.div
// //   className="absolute bottom-25 right-10 pointer-events-none"
// //   initial={{ opacity: 0, y: 30 }}
// //   animate={{ opacity: 0.8, y: 0 }}
// //   transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 80 }}
// // >
// //   <Image
// //     src="/images/miscellaneous_icons_1.svg"
// //     alt="decorative shape"
// //     width={120}
// //     height={120}
// //     className="w-28 h-auto opacity-80 "
// //     priority={false}
// //   />
// // </motion.div>

// //     </section>
// //   );
// // }
