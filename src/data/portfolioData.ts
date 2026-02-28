import type { Activity, NavLink, Stat } from "@/types/portfolio";

export const ACTIVITIES: Activity[] = [
  {
    id: "7a3b29c",
    type: "commit",
    title: "Refactor authentication middleware",
    desc: "Updated JWT handling logic to support rotation.",
    time: "2h ago",
    lang: "javascript",
    langColor: "bg-yellow-400",
    icon: "commit",
  },
  {
    id: "Pull Request #42",
    type: "pull_request",
    title: "Add dark mode support",
    desc: "Implemented theme switching context and Tailwind classes.",
    time: "5h ago",
    lang: "typescript",
    langColor: "bg-primary",
    icon: "call_merge",
  },
  {
    id: "c9e1b40",
    type: "commit",
    title: "Update dependencies",
    desc: "Bumped react-query to v5 and fixed breaking changes.",
    time: "1d ago",
    lang: "html/css",
    langColor: "bg-red-500",
    icon: "commit",
  },
];

export const STATS: Stat[] = [
  { id: "exp", value: "5+", label: "Years Experience" },
  { id: "coffee", value: "100%", label: "Coffee Powered" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];
