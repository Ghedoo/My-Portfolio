"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mails, Menu, X } from "lucide-react";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "./logo";

import HireMeNavbar from "./HireMeNavbar";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
];

// روابط السوشيال مع أيقوناتهم
const socialLinks = [
  { Icon: Github, href: "https://github.com/Ghedoo" },
  { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  { Icon: Twitter, href: "https://twitter.com/yourusername" },
  { Icon: Facebook, href: "https://facebook.com/yourusername" },
  {
    Icon: Mails,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=raghedalkadre997@gmail.com&su=Hello&body=Hi%20there!",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className="    fixed top-0 left-0 w-full z-50
    bg-[#1c1c1c]/80 backdrop-blur-md
    h-16 md:h-auto"
      >
        <div className="relative flex items-center h-full px-6 md:px-20 lg:px-32 md:py-6">
          {/* LEFT (DESKTOP LINKS) */}
          <nav className="hidden lg:flex gap-8 text-white font-semibold flex-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-purple-400
            after:transition-transform after:duration-300
            ${
              pathname === link.href
                ? "after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* LOGO (PERFECT CENTER) */}
          <div className="absolute left-1/2  -translate-x-1/2">
            <Logo />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            {/* Social Icons (DESKTOP) */}
            <div className="hidden lg:flex gap-5 text-white">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href} // الرابط الحقيقي
                  target="_blank" // يفتح الرابط في تبويب جديد
                  rel="noopener noreferrer" // أمان
                  className="hover:text-purple-400 transition"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            {/* Hamburger (MOBILE ONLY) */}
            {/* LEFT: Hire Me + RIGHT: Hamburger */}
            <div className="flex items-center justify-between w-full lg:hidden gap-6">
              {/* زر Hire Me على اليسار */}
              <HireMeNavbar />

              {/* زر الهامبرغر على اليمين */}
              <button onClick={() => setOpen(true)} className="text-white">
                <Menu className="hover:text-purple-400 transition" size={25} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-999 bg-black/25 backdrop-blur-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-purple-400"
            >
              <X size={32} />
            </button>

            {/* Menu */}
            <div className="h-full flex flex-col items-center justify-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-4xl font-bold transition
                    ${
                      pathname === link.href
                        ? "text-purple-600"
                        : "text-black/25 hover:text-purple-400"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Social */}
              <div className="flex gap-6 mt-10 text-black/75">
                {socialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href} // الرابط الحقيقي
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    <Icon size={26} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// response ex
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
// import Logo from "./logo";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/project", label: "Projects" },
//   { href: "/articles", label: "Articles" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <>
//       {/* ===== NAVBAR ===== */}
//       <header className="fixed top-0 left-0 w-full z-50 bg-[#1c1c1c]/80 backdrop-blur-md">
//         <div className="relative flex items-center justify-between px-6 md:px-32 py-6">

//           {/* Empty spacer (left) */}
//           <div className="w-10" />

//           {/* Logo - CENTER */}
//           <div className="absolute left-1/2 -translate-x-1/2">
//             <Logo />
//           </div>

//           {/* Hamburger - RIGHT */}
//           <button
//             onClick={() => setOpen(true)}
//             className="text-white"
//           >
//             <Menu size={30} />
//           </button>
//         </div>
//       </header>

//       {/* ===== FULLSCREEN MENU ===== */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-[999] bg-white/10 backdrop-blur-2xl"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-8 right-8 text-white"
//             >
//               <X size={32} />
//             </button>

//             {/* Menu Content */}
//             <div className="h-full flex flex-col items-center justify-center gap-10">

//               {/* Links */}
//               {links.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className={`text-4xl font-bold transition
//                     ${
//                       pathname === link.href
//                         ? "text-purple-400"
//                         : "text-white hover:text-purple-300"
//                     }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Social Icons */}
//               <div className="flex gap-6 mt-10">
//                 {[Github, Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="text-white hover:text-purple-400 transition"
//                   >
//                     <Icon size={26} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Logo from "./logo";
// import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
// import { motion } from "framer-motion";

// const navbarVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.10 },
//   },
// };

// const sectionVariants = {
//   hidden: { y: -30, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const itemVariants = {
//   hidden: { y: -10, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// export default function Navbar() {
//   const pathname = usePathname();

//   const linkClass = (href: string) =>
//     `relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:bg-white
//      after:transition-transform after:duration-300 ${
//        pathname === href
//          ? "after:scale-x-100"
//          : "after:scale-x-0 hover:after:scale-x-100"
//      }`;

//   return (
//     <motion.div
//       variants={navbarVariants}
//       initial="hidden"
//       animate="visible"
//       suppressHydrationWarning
//     >
//       <header
//         className="w-full px-8 md:px-32 py-7 font-medium flex items-center justify-between relative bg-[#1c1c1c] backdrop-blur-md"
//       >
//         {/* Left */}
//         <motion.nav className="flex gap-6 font-bold text-lg text-white" variants={sectionVariants}>
//           {[
//             { href: "/", label: "Home" },
//             { href: "/about", label: "About" },
//             { href: "/project", label: "Projects" },
//             { href: "/articles", label: "Articles" },
//           ].map((link) => (
//             <motion.div key={link.href} variants={itemVariants}>
//               <Link href={link.href} className={linkClass(link.href)}>
//                 {link.label}
//               </Link>
//             </motion.div>
//           ))}
//         </motion.nav>

//         {/* Center */}
//         <motion.div
//           className="absolute left-1/2 -translate-x-1/2"
//           variants={sectionVariants}
//         >
//           <Logo />
//         </motion.div>

//         {/* Right */}
//         <motion.nav className="flex gap-6" variants={sectionVariants}>
//           {[Github, Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
//             <motion.a
//               key={i}
//               href="#"
//               variants={itemVariants}
//               whileHover={{ y: -3 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-gray-600 hover:text-black transition-colors"
//             >
//               <Icon size={22} />
//             </motion.a>
//           ))}
//         </motion.nav>
//       </header>
//     </motion.div>
//   );
// }
