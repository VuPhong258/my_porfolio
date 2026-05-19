/** Shared motion tokens — keeps animation timing consistent sitewide */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
  reveal: 0.85,
} as const;

export const MOTION_VIEWPORT = {
  once: true,
  margin: "-72px" as const,
  amount: 0.2 as const,
};

export const MOTION_STAGGER = {
  tight: 0.06,
  base: 0.08,
  relaxed: 0.12,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.base,
      delay,
      ease: MOTION_EASE,
    },
  }),
};

export const fadeUpBlur = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: MOTION_DURATION.reveal,
      delay,
      ease: MOTION_EASE,
    },
  }),
};
