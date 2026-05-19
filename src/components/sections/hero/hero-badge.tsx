"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/data/hero";
import { SITE_CONFIG } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

export function HeroBadge() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
      className="mb-7 flex flex-wrap items-center gap-3"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-medium text-zinc-200">{HERO_CONTENT.eyebrow}</span>
        <span className="hidden text-zinc-600 sm:inline" aria-hidden>
          ·
        </span>
        <span className="hidden text-zinc-400 sm:inline">{HERO_CONTENT.status}</span>
      </span>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        {SITE_CONFIG.name}
      </span>
    </motion.div>
  );
}

export function HeroTechPills() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: 0.55 },
        },
      }}
      className="mt-8 flex flex-wrap gap-2"
      aria-label="Core technologies"
    >
      {HERO_CONTENT.techPills.map((tech) => (
        <motion.li
          key={tech}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="rounded-md border border-white/[0.06] bg-zinc-900/50 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-violet-500/25 hover:text-zinc-200"
        >
          {tech}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function HeroMetrics() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.dl
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.7 },
        },
      }}
      className="mt-10 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-7 sm:gap-6"
    >
      {HERO_CONTENT.metrics.map((metric) => (
        <motion.div
          key={metric.label}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <dt className="sr-only">{metric.label}</dt>
          <dd className="hero-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            {metric.value}
          </dd>
          <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{metric.label}</dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
