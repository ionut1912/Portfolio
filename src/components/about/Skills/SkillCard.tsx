import { CUSTOM_COLORS } from "@/data/constants";
import type { Skill } from "@/types/skills";
import { GenericCard } from "@/components/shared/GenericCard";
import type { JSX } from "react";
import { SkillIcon } from "./SkillIcon";
import SkillProgress from "./SkillProgress";

export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
  return (
    <GenericCard
      badge={{
        icon: <SkillIcon skill={skill} />,
        label: skill.name,
      }}
      sx={{
        borderRadius: "1rem",
        borderColor: "rgba(255,255,255,0.05)",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: `${CUSTOM_COLORS.primary}66`,
          boxShadow: "none",
          "& .gc-title": { color: "unset" }, // title doesn't change colour on hover here
        },
        "& .gc-badge-label": {
          fontFamily: "inherit",
          fontWeight: 600,
          fontSize: "0.95rem",
          color: CUSTOM_COLORS.slate100,
          opacity: 1,
        },
      }}
      title={undefined}
    >
      <SkillProgress level={skill.level} />
    </GenericCard>
  );
}
