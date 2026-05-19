"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { useScrollTo } from "@/hooks/useScrollTo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    onScroll();
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [onScroll]);

  const handleNav = (href: string) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-5 py-4 transition-[padding] duration-300 sm:px-8",
        scrolled && "py-3"
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "section-container flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 sm:py-3",
          scrolled
            ? "glass glow-purple border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="hero-display text-lg font-bold tracking-tight text-white interactive-scale"
        >
          {SITE_CONFIG.shortName}
          <span className="text-violet-400" aria-hidden>
            .
          </span>
          <span className="sr-only"> - {SITE_CONFIG.name}, home</span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-3.5 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white focus-visible:bg-white/[0.05] focus-visible:text-white lg:px-4"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            size="sm"
            className="rounded-lg px-5"
            onClick={() => handleNav("#contact")}
          >
            Contact
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open navigation menu">
              <Menu className="h-5 w-5" aria-hidden />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-2 pt-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
              Menu
            </p>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                type="button"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.04,
                  duration: MOTION_DURATION.fast,
                  ease: MOTION_EASE,
                }}
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-3 py-3 text-left text-base text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </motion.button>
            ))}
            <Button
              className="mt-6 w-full"
              onClick={() => handleNav("#contact")}
            >
              Contact
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
