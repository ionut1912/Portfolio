import { CUSTOM_COLORS } from "@/data/contsnts";
import type { Skill } from "@/types/skills";
import { Box } from "@mui/material";
import type { JSX } from "react";

export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
  const { Icon } = skill;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        p: "1.25rem 1.5rem",
        borderRadius: "1rem",
        bgcolor: "#1a1d24",
        border: "1px solid",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "none",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "rgba(59,130,246,0.4)",
        },
      }}
    >
      {/* Icon + Name */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
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
        <Box
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            color: CUSTOM_COLORS.slate100,
          }}
        >
          {skill.name}
        </Box>
      </Box>

      {/* Progress bar */}
      <Box>
        <Box
          sx={{
            height: 5,
            borderRadius: 99,
            bgcolor: "rgba(255,255,255,0.07)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: `${skill.level}%`,
              borderRadius: 99,
              background: "linear-gradient(90deg, #2563eb, #3b82f6)",
              transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </Box>

        <Box
          component="span"
          sx={{
            display: "block",
            textAlign: "right",
            mt: "0.3rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: CUSTOM_COLORS.slate400,
          }}
        >
          {skill.level}%
        </Box>
      </Box>
    </Box>
  );
}
