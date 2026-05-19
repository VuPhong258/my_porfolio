"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/tech-stack";
import { SectionHeading } from "@/components/animations/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function TechStack() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="stack"
      className="section-padding"
      aria-labelledby="stack-heading"
    >
      <div className="section-container">
        <SectionHeading
          headingId="stack-heading"
          label="Tech Stack"
          title="Technologies and tools"
          description="The main technologies behind my Music App and learning path."
        />

        <StaggerContainer
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
          stagger={0.04}
        >
          {TECH_STACK.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                whileHover={reduced ? {} : { scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
                className={cn(
                  "glass glass-hover group flex aspect-square flex-col items-center justify-center gap-3 rounded-xl p-4 sm:rounded-2xl",
                  `bg-gradient-to-br ${tech.color}`,
                  !reduced && "hover:glow-blue"
                )}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3 shadow-lg shadow-black/20">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </span>
                <span className="text-center text-sm font-semibold text-zinc-100 transition-colors group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
