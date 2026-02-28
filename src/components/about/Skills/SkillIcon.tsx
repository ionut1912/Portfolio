import type { Skill } from "@/types/skills";
import { Box } from "@mui/material";
import type { JSX } from "react";

export function SkillIcon({ skill }: { skill: Skill }): JSX.Element {
  const { Icon } = skill;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        color: skill.color,
        flexShrink: 0,
      }}
    >
      <Icon />
    </Box>
  );
}
