"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollTo } from "@/hooks/useScrollTo";

export function HeroScrollIndicator() {
  const scrollTo = useScrollTo();
  const reduced = usePrefersReducedMotion();

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduced ? 0 : 1.1, duration: 0.5 }}
      onClick={() => scrollTo("#about")}
      className="group absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-zinc-500 transition-colors hover:text-violet-400"
      aria-label="Scroll to about section"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
        Scroll
      </span>
      <span className="relative flex h-12 w-6 items-start justify-center rounded-full border border-white/10 p-1.5">
        <motion.span
          animate={reduced ? {} : { y: [0, 14, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1 rounded-full bg-violet-400/80"
        />
      </span>
    </motion.button>
  );
}
