"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/gallery-lobby.jpg",
    alt: "LUXORA hotel lobby",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-room.jpg",
    alt: "Elegant LUXORA hotel room",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery-dining.jpg",
    alt: "LUXORA signature dining area",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery-lounge.jpg",
    alt: "LUXORA hotel lounge",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/gallery-pool.jpg",
    alt: "LUXORA hotel pool",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#163B5C] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-16 max-w-2xl sm:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/60 sm:text-xs">
            The Gallery
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            A glimpse into
            <span className="block italic">
              the LUXORA world.
            </span>
          </h2>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 md:gap-5">

          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative min-h-[280px] overflow-hidden ${image.className}`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/25" />

              {/* Number */}
              <div className="absolute bottom-5 left-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-[10px] tracking-[0.3em] text-white/90">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-14 text-center sm:mt-16"
        >
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex border border-white/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#163B5C] sm:text-xs"
          >
            Explore LUXORA
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}