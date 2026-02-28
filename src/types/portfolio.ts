export interface Activity {
  id: string;
  type: "commit" | "pull_request";
  title: string;
  desc: string;
  time: string;
  lang: string;
  langColor: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export type SectionId = "about" | "projects" | "contact" | "home";

export interface NavLink {
  label: string;
  id: SectionId;
}
