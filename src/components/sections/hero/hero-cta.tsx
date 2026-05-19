"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { HERO_CONTENT } from "@/data/hero";
import { useScrollTo } from "@/hooks/useScrollTo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

export function HeroCTA() {
  const scrollTo = useScrollTo();
  const reduced = usePrefersReducedMotion();
  const { ctas } = HERO_CONTENT;

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION.base, delay: 0.45, ease: MOTION_EASE }}
      className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
    >
      <Button
        size="lg"
        onClick={() => scrollTo(ctas.primary.href)}
        className={cn(
          "group h-12 min-w-[160px] rounded-xl px-7 text-[15px] font-semibold",
          "shadow-lg shadow-violet-600/20 transition-all hover:shadow-violet-500/30"
        )}
      >
        {ctas.primary.label}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="h-12 min-w-[160px] rounded-xl border-white/12 bg-white/[0.03] px-7 text-[15px] font-medium backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/[0.06]"
      >
        <a href={ctas.secondary.href} target="_blank" rel="noopener noreferrer">
          <FileText className="h-4 w-4 text-violet-400" />
          {ctas.secondary.label}
        </a>
      </Button>
    </motion.div>
  );
}
