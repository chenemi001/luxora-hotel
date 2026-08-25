"use client";

import { motion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white text-[#17202A]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* Section Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={textVariants}
            className="mb-6 text-[10px] uppercase tracking-[0.45em] text-[#64748B] sm:text-xs"
          >
            The LUXORA Experience
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            More than a place to stay.
            <span className="mt-2 block font-normal">
              A place to truly arrive.
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base"
          >
            LUXORA brings together thoughtful hospitality,
            timeless design, and extraordinary details to create
            an experience that stays with you long after you leave.
          </motion.p>
        </motion.div>

        {/* Story */}
        <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-24">

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                ease: "easeOut",
              }}
              src="/images/luxora-about.jpg"
              alt="Elegant interior at LUXORA hotel"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#64748B] sm:text-xs">
              Our Philosophy
            </p>

            <h3 className="mt-5 text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Designed around
              <span className="block">
                the way you live.
              </span>
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#64748B] sm:text-base">
              From the moment you arrive, every detail has been
              considered. From quiet mornings overlooking the city
              to evenings surrounded by exceptional design, LUXORA
              is created around the way you want to experience luxury.
            </p>

            {/* Link */}
            <motion.a
              href="#experience"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="mt-8 inline-flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-[#1E3A5F]"
            >
              Discover Our Story

              <span
                aria-hidden="true"
                className="text-lg"
              >
                →
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}