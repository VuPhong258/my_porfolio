"use client";

import { useCallback } from "react";
import { SCROLL_OFFSET } from "@/lib/constants";

export function useScrollTo() {
  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const top =
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, []);

  return scrollTo;
}
