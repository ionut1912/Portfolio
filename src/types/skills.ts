import type { IconType } from "react-icons";

export type Category = "All" | "Frontend" | "Backend" | "Tools" | "Database";

export interface Skill {
  name: string;
  level: number;
  category: Exclude<Category, "All">;
  Icon: IconType;
  color: string;
}
