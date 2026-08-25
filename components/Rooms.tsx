"use client";

import { motion } from "framer-motion";
import RoomCard from "./RoomCard";

const rooms = [
  {
    name: "The Deluxe Room",
    description:
      "A refined retreat with contemporary interiors, thoughtful details, and views designed to slow the world down.",
    price: "From $280",
    image: "/images/deluxe-room.jpg",
  },
  {
    name: "The Ocean Suite",
    description:
      "A spacious suite where natural light, elegant materials, and panoramic views create an unforgettable stay.",
    price: "From $350",
    image: "/images/ocean-suite.jpg",
  },
  {
    name: "The Presidential Suite",
    description:
      "Our most exclusive residence, combining generous living spaces with exceptional comfort and privacy.",
    price: "From $650",
    image: "/images/presidential-suite.jpg",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="bg-[#0B1F33] text-white"
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
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/50 sm:text-xs">
            Rooms & Suites
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Spaces designed
            <span className="block italic">
              for your stay.
            </span>
          </h2>
        </motion.div>

        {/* Room Grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.name}
              room={room}
              index={index}
            />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <motion.a
            href="#booking"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-flex border border-white/40 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-white hover:text-[#0B1F33] sm:text-xs"
          >
            Explore All Rooms
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}