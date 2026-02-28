import { Box, Chip } from "@mui/material";
import SkillCard from "./SkillCard";
import { CUSTOM_COLORS } from "@/data/constants";
import { CATEGORIES, SKILLS } from "@/data/skillData";
import type { Category } from "@/types/skills";
import { useState, type JSX } from "react";
import { SectionLabel } from "../../shared/SectionLabel";

export function SkillsSection(): JSX.Element {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      <SectionLabel text="My" highlightText="Skills" />

      <Box sx={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        {CATEGORIES.map((cat: Category) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setActive(cat)}
            sx={{
              fontWeight: 500,
              fontSize: "0.875rem",
              px: "0.25rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              ...(active === cat
                ? {
                    bgcolor: CUSTOM_COLORS.primaryDark,
                    color: "#fff",
                    "&:hover": { bgcolor: CUSTOM_COLORS.primaryDarker },
                  }
                : {
                    bgcolor: "transparent",
                    color: (theme) =>
                      theme.palette.mode === "dark"
                        ? CUSTOM_COLORS.slate400
                        : CUSTOM_COLORS.slate600,
                    "&:hover": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.04)",
                    },
                  }),
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: "1rem",
        }}
      >
        {filtered.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </Box>
    </Box>
  );
}
