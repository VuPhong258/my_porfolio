export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  highlights: ProjectHighlight[];
  github: string;
  live: string;
  year: string;
  role: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "music-app",
    title: "Music App",
    subtitle: "Full-stack music streaming web application",
    description:
      "A full-stack music streaming application with a responsive Spotify-inspired UI, custom playback controls, protected routes, and an admin dashboard.",
    longDescription:
      "Built with separate frontend and backend architecture. The app manages songs, albums, users, authentication state, dashboard statistics, and media uploads while keeping the player experience smooth through client-side state management.",
    image: "/images/music-app-placeholder.svg",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
      "Clerk",
      "Cloudinary",
    ],
    features: [
      "Responsive Spotify-inspired UI built with React, TypeScript, Tailwind CSS, and Radix UI",
      "Playback controls for play, pause, next, previous, volume, progress tracking, and album-based playback",
      "RESTful APIs with Node.js, Express, PostgreSQL, and Prisma for songs, albums, users, and dashboard statistics",
      "Clerk authentication with protected routes and admin authorization",
      "Admin dashboard for adding and deleting songs and albums with media uploads via Cloudinary",
      "Zustand stores for music data, authentication status, and audio player behavior",
    ],
    highlights: [
      { label: "Stack", value: "React + Node.js" },
      { label: "State", value: "Zustand" },
      { label: "Auth", value: "Clerk" },
      { label: "Storage", value: "Cloudinary" },
    ],
    github: "https://github.com/VuPhong258/Music-App",
    live: "",
    year: "May 2025 - Now",
    role: "Full-stack Developer",
    featured: true,
  },
];

export const FEATURED_PROJECT =
  PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
