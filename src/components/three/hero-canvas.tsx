"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInViewRef } from "@/hooks/useInViewRef";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);

const ParticleFieldScene = dynamic(
  () =>
    import("@/components/three/particle-field").then(
      (m) => m.ParticleFieldScene
    ),
  { ssr: false }
);

function HeroCanvasFallback() {
  return <div aria-hidden className="hero-bg-fallback absolute inset-0" />;
}

export function HeroCanvas() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isCoarse = useMediaQuery("(pointer: coarse)");
  const { ref, inView } = useInViewRef<HTMLDivElement>();

  const particleCount = isMobile ? 350 : isCoarse ? 450 : 700;
  const interactive = !isCoarse && !reducedMotion;

  if (reducedMotion) {
    return <HeroCanvasFallback />;
  }

  return (
    <div ref={ref} className="absolute inset-0 -z-10" aria-hidden>
      <HeroCanvasFallback />

      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 55 }}
          dpr={isMobile ? [1, 1] : [1, 1.25]}
          frameloop={inView ? "always" : "never"}
          performance={{ min: 0.5 }}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "low-power",
            stencil: false,
            depth: true,
          }}
          style={{ background: "transparent" }}
        >
          <ParticleFieldScene
            particleCount={particleCount}
            interactive={interactive}
            showOrb={!isMobile}
          />
        </Canvas>
      </Suspense>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/20 to-zinc-950" />
      <div className="pointer-events-none absolute inset-0 hero-vignette" />
    </div>
  );
}
