"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      aria-label="LUXORA hotel introduction"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.08,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hotel-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/35"
      />

      {/* Cinematic Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/70"
      />

      {/* Subtle Center Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-5 py-32 text-center sm:px-6 lg:px-8">

        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.p
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="mb-5 text-[10px] uppercase tracking-[0.45em] text-white/75 sm:text-xs sm:tracking-[0.5em]"
          >
            Welcome to LUXORA
          </motion.p>

          {/* Heading */}
          <motion.h1
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-5xl font-light uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Yours,
            <span className="block italic">
              Truly.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: "easeOut",
            }}
            className="mx-auto mt-7 max-w-md text-sm leading-6 text-white/75 sm:mt-8 sm:text-base sm:leading-7"
          >
            Discover a world of refined hospitality,
            timeless design, and unforgettable experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: "easeOut",
            }}
            className="mt-8 sm:mt-10"
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.04,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 0.97,
                    }
              }
              className="inline-block"
            >
              <Link
                href="#rooms"
                className="inline-flex min-h-12 items-center justify-center border border-white/70 px-7 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-white hover:text-black sm:px-8 sm:text-xs"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.7,
          duration: 0.8,
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
            Scroll
          </span>

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 8, 0],
                    opacity: [0.4, 1, 0.4],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-9 w-px bg-white/60"
          />
        </div>
      </motion.div>

    </section>
  );
}