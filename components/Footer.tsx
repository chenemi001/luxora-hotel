"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Explore",
    links: ["Rooms", "Experience", "Gallery", "Dining"],
  },
  {
    title: "Information",
    links: ["About", "Contact", "FAQ", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">

        {/* Main footer */}
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
          >
            <a
              href="#"
              className="text-2xl font-light tracking-[0.2em]"
            >
              LUXORA
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              A destination designed around extraordinary
              stays, thoughtful details, and unforgettable
              experiences.
            </p>

            <motion.a
              href="#booking"
              whileHover={{
                x: 6,
              }}
              className="mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/80"
            >
              Make a Reservation
              <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>

          {/* Explore */}
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          {/* Information */}
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-7 sm:mt-20">
          <div className="flex flex-col gap-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} LUXORA. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Pinterest
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        delay: 0.1,
      }}
    >
      <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}