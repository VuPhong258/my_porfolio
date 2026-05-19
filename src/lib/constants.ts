export const SITE_CONFIG = {
  name: "Tran Nguyen Vu Phong",
  shortName: "Phong",
  title: "Full-Stack Developer",
  email: "trannguyenvuphong258@gmail.com",
  phone: "0367897023",
  location: "Ho Chi Minh City",
  github: "https://github.com/VuPhong258",
  linkedin: "",
  twitter: "",
  cv: "/Tran-Nguyen-Vu-Phong-CV.pdf",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  skills: "skills",
  stack: "stack",
  projects: "projects",
  contact: "contact",
} as const;

/** Fixed navbar height for scroll offset (px) */
export const SCROLL_OFFSET = 88;
