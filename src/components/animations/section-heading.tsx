"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  /** Pass to section aria-labelledby for accessibility */
  headingId: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
  headingId,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
      blur
    >
      <p className="section-label">{label}</p>
      <h2 id={headingId} className="section-title">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "section-desc",
            align === "left" && "mx-0 max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
