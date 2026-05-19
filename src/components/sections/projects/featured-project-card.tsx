"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Music2,
  Play,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/button";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const reduced = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [5, -5]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 260,
    damping: 24,
  });

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotX}px ${spotY}px, rgba(29, 185, 84, 0.14), transparent 65%)`;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotX.set(x);
    spotY.set(y);
    tiltX.set(x / rect.width - 0.5);
    tiltY.set(y / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    tiltX.set(0);
    tiltY.set(0);
    spotX.set(0);
    spotY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: MOTION_DURATION.reveal, ease: MOTION_EASE }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
      style={
        reduced
          ? undefined
          : {
              rotateX: hovered ? rotateX : 0,
              rotateY: hovered ? rotateY : 0,
              transformPerspective: 1200,
            }
      }
      className="group relative"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-r from-[#1db954]/20 via-violet-600/15 to-blue-600/20 blur-xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="project-card relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-zinc-900/50 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
        )}

        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="relative border-b border-white/[0.06] lg:border-b-0 lg:border-r lg:border-white/[0.06]">
            <div className="p-4 pb-0 sm:p-6 sm:pb-0 lg:p-8 lg:pb-0">
              <BrowserChrome />
              <motion.div
                className="relative mt-3 overflow-hidden rounded-t-xl border border-white/[0.08] border-b-0 bg-zinc-950"
                whileHover={reduced ? {} : { scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#1db954]/25 via-transparent to-violet-900/20 opacity-60 mix-blend-overlay"
                    animate={{ opacity: hovered ? 0.75 : 0.5 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="absolute bottom-5 left-5 flex items-center gap-3"
                    animate={{ y: hovered && !reduced ? 0 : 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <motion.span
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1db954] text-black shadow-lg shadow-[#1db954]/40"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-5 w-5 fill-current pl-0.5" />
                    </motion.span>
                    <div className="hidden rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 backdrop-blur-md sm:block">
                      <p className="text-xs font-medium text-white">Now Playing</p>
                      <p className="text-[10px] text-zinc-400">Demo preview UI</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1db954]/30 bg-[#1db954]/10 px-3 py-1 text-xs font-semibold text-[#1ed760]">
                <Music2 className="h-3.5 w-3.5" />
                Featured
              </span>
              <span className="text-xs text-zinc-500">
                {project.year} · {project.role}
              </span>
            </div>

            <h3 className="hero-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#1ed760]/90">
              {project.subtitle}
            </p>

            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {project.longDescription}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduced ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: MOTION_DURATION.base,
                    ease: MOTION_EASE,
                  }}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-[#1db954]/20 hover:bg-[#1db954]/5"
                >
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-zinc-200">
                    {item.value}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <ul className="mt-8 space-y-2.5">
              {project.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={reduced ? {} : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.05,
                    duration: MOTION_DURATION.fast,
                    ease: MOTION_EASE,
                  }}
                  className="flex items-start gap-2.5 text-sm text-zinc-400"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1db954]" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.ul
              className="mt-8 flex flex-wrap gap-2"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.04, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.92 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.04,
                    borderColor: "rgba(29, 185, 84, 0.35)",
                  }}
                  className="rounded-md border border-white/[0.08] bg-zinc-800/50 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors"
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {project.live ? (
                <Button
                  asChild
                  size="lg"
                  className="group/btn h-12 rounded-xl bg-[#1db954] px-6 font-semibold text-black shadow-lg shadow-[#1db954]/25 hover:bg-[#1ed760]"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              ) : null}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/12 bg-white/[0.03] hover:border-white/20"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Code
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-white/[0.08] bg-zinc-900/80 px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
      </div>
      <div className="ml-2 flex flex-1 items-center justify-center rounded-md border border-white/[0.06] bg-zinc-950/80 px-3 py-1">
        <span className="truncate font-mono text-[10px] text-zinc-500 sm:text-xs">
          github.com/VuPhong258/Music-App
        </span>
      </div>
    </div>
  );
}
