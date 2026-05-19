"use client";

import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useScrollTo } from "@/hooks/useScrollTo";

const SOCIAL_LINKS = [
  { icon: Github, href: SITE_CONFIG.github, label: "GitHub profile" },
  { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn profile" },
  { icon: Twitter, href: SITE_CONFIG.twitter, label: "Twitter profile" },
] as const;

const activeSocialLinks = SOCIAL_LINKS.filter((link) => link.href);

export function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-5 py-12 sm:px-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="hero-display text-sm font-semibold text-zinc-300">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              © {year} · Built with Next.js & Tailwind CSS
            </p>
          </div>

          <ul className="flex items-center gap-3" role="list">
            {activeSocialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="interactive-scale flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-400 transition-colors hover:border-violet-500/35 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="interactive-scale flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-2.5 text-sm text-zinc-400 transition-colors hover:border-violet-500/35 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
