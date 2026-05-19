# Developer Portfolio

A modern creative developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui (Radix primitives)
- **Animation:** Framer Motion
- **3D:** Three.js, React Three Fiber, Drei
- **Scroll:** Lenis
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── animations/   # Reusable motion wrappers
│   ├── providers/    # Client providers (Lenis)
│   ├── sections/     # Page sections
│   ├── three/        # R3F scenes
│   └── ui/           # shadcn-style UI primitives
├── data/             # Content constants
├── hooks/            # Custom hooks
├── lib/              # Utils & site config
└── styles/           # Global CSS
```

## Customize

- Update `src/lib/constants.ts` for name, links, and email
- Edit `src/data/` files for skills, projects, and about content
- Replace the Spotify clone image URL in `src/data/projects.ts`
