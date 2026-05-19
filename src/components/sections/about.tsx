"use client";

import { ABOUT_CONTENT } from "@/data/about";
import { SectionHeading } from "@/components/animations/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

export function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <SectionHeading
          headingId="about-heading"
          label="About"
          title={ABOUT_CONTENT.headline}
          description="A quick intro for recruiters and hiring teams."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeIn className="lg:col-span-3" delay={0.05}>
            <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
              {ABOUT_CONTENT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="body-lg mb-5 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.12}>
            <ul className="flex flex-col gap-4" role="list">
              {ABOUT_CONTENT.highlights.map((item) => (
                <li
                  key={item.label}
                  className="glass glass-hover rounded-xl p-5 sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-400">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
