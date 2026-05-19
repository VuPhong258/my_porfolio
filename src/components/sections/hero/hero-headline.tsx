"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/data/hero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: MOTION_DURATION.reveal, ease: MOTION_EASE },
  },
};

const itemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export function HeroHeadline() {
  const reduced = usePrefersReducedMotion();
  const variants = reduced ? itemReduced : item;
  const { headline } = HERO_CONTENT;

  return (
    <motion.h1
      className={cn("hero-display max-w-[13ch] text-balance lg:max-w-[15ch]")}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={`${headline.prefix} ${headline.highlight} ${headline.suffix}`}
    >
      <motion.span
        variants={variants}
        className="block text-[clamp(2.5rem,5.4vw,4.65rem)] font-bold leading-[0.98] tracking-tight text-white"
      >
        {headline.prefix}
      </motion.span>

      <motion.span
        variants={variants}
        className="mt-2 block text-[clamp(2.5rem,5.4vw,4.65rem)] font-bold leading-[0.98] tracking-tight"
      >
        <span className="hero-gradient-text">{headline.highlight}</span>{" "}
        <span className="text-white/95">{headline.suffix}</span>
      </motion.span>
    </motion.h1>
  );
}
