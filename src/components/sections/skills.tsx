"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES, type SkillItem } from "@/data/skills";
import { SectionHeading } from "@/components/animations/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const statusClass: Record<SkillItem["status"], string> = {
  "Project use": "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Working: "border-blue-400/20 bg-blue-400/10 text-blue-200",
  Familiar: "border-violet-400/20 bg-violet-400/10 text-violet-200",
};

export function Skills() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding section-alt"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionHeading
          headingId="skills-heading"
          label="Skills"
          title="What I bring to the table"
          description="Skills grouped by how I use them in real coursework and projects."
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-3 md:gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <StaggerItem key={category.id}>
              <motion.article
                whileHover={reduced ? {} : { y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className={cn(
                  "glass glass-hover flex h-full flex-col rounded-2xl p-6 sm:p-7",
                  !reduced && "hover:glow-purple"
                )}
              >
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {category.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3" role="list">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-violet-300"
                          aria-hidden
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-zinc-200">
                            {skill.name}
                          </p>
                          <span
                            className={cn(
                              "mt-2 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium",
                              statusClass[skill.status]
                            )}
                          >
                            {skill.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
