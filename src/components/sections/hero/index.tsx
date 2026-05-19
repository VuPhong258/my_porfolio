"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin } from "lucide-react";
import { HERO_CONTENT } from "@/data/hero";
import { SITE_CONFIG } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { HeroBadge, HeroMetrics, HeroTechPills } from "./hero-badge";
import { HeroHeadline } from "./hero-headline";
import { HeroCTA } from "./hero-cta";
import { HeroScrollIndicator } from "./hero-scroll-indicator";

const HeroCanvas = dynamic(
  () =>
    import("@/components/three/hero-canvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      aria-label="Introduction"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[360px] w-[360px] rounded-full bg-blue-600/[0.06] blur-[100px]"
      />

      <HeroCanvas />

      <div className="relative z-10 w-full px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pt-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-16">
            <div>
              <HeroBadge />

              <HeroHeadline />

              <motion.p
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: MOTION_DURATION.base,
                  delay: 0.35,
                  ease: MOTION_EASE,
                }}
                className="mt-7 max-w-[58ch] text-base leading-[1.7] text-zinc-400 sm:text-lg sm:leading-[1.75]"
              >
                Hi, I&apos;m{" "}
                <span className="font-medium text-zinc-200">{SITE_CONFIG.name}</span>
                . {HERO_CONTENT.subtext}
              </motion.p>

              <HeroCTA />
              <HeroTechPills />
              <HeroMetrics />
            </div>

            <motion.aside
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: MOTION_DURATION.reveal,
                delay: 0.45,
                ease: MOTION_EASE,
              }}
              className="glass relative overflow-hidden rounded-2xl p-6 shadow-2xl shadow-black/30 sm:p-7"
              aria-label="Profile summary"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
              />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
                Portfolio snapshot
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Music App is my flagship full-stack project.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                A React and Node.js music streaming app with playback controls,
                REST APIs, Clerk auth, admin authorization, MongoDB models, and
                Cloudinary uploads.
              </p>

              <dl className="mt-6 grid gap-3">
                {[
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value: "Sai Gon University · Software Engineering",
                  },
                  {
                    icon: Code2,
                    label: "Current stack",
                    value: "React, TypeScript, Node.js, Express, MongoDB",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: SITE_CONFIG.location,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" aria-hidden />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-zinc-200">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.aside>
          </div>
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
