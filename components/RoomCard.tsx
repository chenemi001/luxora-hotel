"use client";

import { motion } from "framer-motion";

type Room = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type RoomCardProps = {
  room: Room;
  index: number;
};

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#17202A]">
        <motion.img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

        {/* View button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-6"
        >
          <span className="border border-white/70 bg-black/20 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            View Room
          </span>
        </motion.div>
      </div>

      {/* Details */}
      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-light text-white sm:text-2xl">
            {room.name}
          </h3>

          <span className="whitespace-nowrap text-xs text-white/50">
            {room.price}
          </span>
        </div>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
          {room.description}
        </p>
      </div>
    </motion.article>
  );
}