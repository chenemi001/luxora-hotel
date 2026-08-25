"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    number: "01",
    title: "Wellness & Spa",
    description:
      "Restore, relax, and recharge with treatments designed around your wellbeing.",
  },
  {
    number: "02",
    title: "Signature Dining",
    description:
      "Exceptional cuisine, thoughtful ingredients, and memorable dining experiences.",
  },
  {
    number: "03",
    title: "Fitness Studio",
    description:
      "A beautifully designed space to move, train, and maintain your routine.",
  },
  {
    number: "04",
    title: "Private Events",
    description:
      "Elegant spaces created for celebrations, gatherings, and unforgettable moments.",
  },
];

export default function Amenities() {
  return (
    <section
      id="experience"
      className="bg-white text-[#17202A]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-16 max-w-2xl sm:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#64748B] sm:text-xs">
            Everything You Need
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Designed around
            <span className="block italic">
              your stay.
            </span>
          </h2>
        </motion.div>

        {/* Amenities */}
        <div className="border-t border-[#17202A]/15">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group border-b border-[#17202A]/15"
            >
              <motion.div
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="grid gap-5 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-10 md:py-10"
              >
                {/* Number */}
                <span className="text-xs tracking-[0.2em] text-[#64748B]">
                  {amenity.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-light transition-colors duration-300 group-hover:text-[#1E3A5F] sm:text-3xl md:text-4xl">
                    {amenity.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
                    {amenity.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.span
                  aria-hidden="true"
                  animate={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="hidden text-2xl text-[#1E3A5F] md:block"
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}