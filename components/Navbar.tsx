"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Hotel & Rooms", href: "#rooms" },
  { name: "Offers", href: "#offers" },
  { name: "Dining", href: "#dining" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-0 top-0 z-50 w-full"
      >
        <nav
          aria-label="Main navigation"
          className="flex h-20 items-center justify-between border-b border-white/20 bg-black/10 px-5 backdrop-blur-sm sm:px-6 lg:px-10"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="LUXORA home"
            className="flex items-center gap-3 text-white"
          >
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.4 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-sm sm:h-10 sm:w-10"
            >
              L
            </motion.div>

            <span className="hidden text-sm font-medium tracking-[0.3em] sm:block">
              LUXORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.08,
                }}
              >
                <Link
                  href={link.href}
                  className="relative text-[11px] uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 sm:flex">
            <button
              type="button"
              className="text-[11px] uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-white"
            >
              English
            </button>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="#booking"
                className="block bg-white px-5 py-4 text-[11px] font-medium uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-white/80"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 4 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-px w-6 bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block h-px w-6 bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: -45, y: -4 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-px w-6 bg-white"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-20 z-40 w-full border-b border-white/10 bg-black/90 px-6 py-8 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full bg-white px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-black"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}