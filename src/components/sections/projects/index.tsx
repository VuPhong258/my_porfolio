"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT } from "@/data/projects";
import { SectionHeading } from "@/components/animations/section-heading";
import { FeaturedProjectCard } from "./featured-project-card";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MOTION_DURATION } from "@/lib/motion";

export function Projects() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[min(480px,50vh)] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-[#1db954]/[0.04] blur-[120px]"
      />
      {!reduced && (
        <motion.div
          aria-hidden
          className="projects-section-grid pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: MOTION_DURATION.reveal }}
        />
      )}

      <div className="section-container relative">
        <SectionHeading
          headingId="projects-heading"
          label="Featured Project"
          title="Flagship work"
          description="The project I'm most proud of: a full-stack music streaming app that shows how I build both product UI and backend services."
        />

        <FeaturedProjectCard project={FEATURED_PROJECT} />
      </div>
    </section>
  );
}
