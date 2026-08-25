"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "An experience unlike anywhere else. Every detail felt intentional, from the room to the smallest moments of hospitality.",
    name: "Amelia R.",
    location: "London, UK",
  },
  {
    quote:
      "LUXORA completely exceeded our expectations. Beautiful spaces, incredible service, and an atmosphere we never wanted to leave.",
    name: "Daniel M.",
    location: "New York, USA",
  },
  {
    quote:
      "There is something incredibly special about this place. It feels luxurious without ever feeling excessive.",
    name: "Sofia A.",
    location: "Madrid, Spain",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0F2F4A] text-white"
    >
      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      <div className="relative mx-auto flex min-h-[650px] max-w-5xl items-center justify-center px-6 py-24 text-center sm:px-8 sm:py-32 lg:px-10">

        <div className="w-full">

          {/* Label */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-[10px] uppercase tracking-[0.45em] text-white/50 sm:text-xs"
          >
            Guest Stories
          </motion.p>

          {/* Quote */}
          <div className="mx-auto mt-12 min-h-[250px] max-w-4xl sm:mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <blockquote className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  “{activeTestimonial.quote}”
                </blockquote>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.25em]">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-2 text-xs text-white/50">
                    {activeTestimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0
                    ? testimonials.length - 1
                    : activeIndex - 1
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
            >
              ←
            </button>

            <span className="text-[10px] tracking-[0.25em] text-white/50">
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActiveIndex(
                  activeIndex === testimonials.length - 1
                    ? 0
                    : activeIndex + 1
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
            >
              →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}