import { CoreValuesSection } from "@/components/about/sections/CoreValuesSection";
import { JourneySection } from "@/components/about/sections/JourneySection";
import { ProfileCard } from "@/components/about/sections/ProfileCard";
import { QuickStatsGrid } from "@/components/home/QuickStatsGrid";
import { SkillsSection } from "@/components/about/Skills/SkillsSection";
import { CORE_VALUES, JOURNEY_PARAGRAPHS } from "@/data/aboutData";
import { Box } from "@mui/material";
import type { JSX } from "react";

const QUICK_STATS = [
  { value: "05", label: "Years Experience" },
  { value: "15", label: "Projects Shipped" },
] as const;

export default function About(): JSX.Element {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "5fr 7fr" },
        gap: { xs: "3rem", lg: "5rem" },
        alignItems: "start",
      }}
    >
      {/* ── Left column: sticky visual ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          position: { lg: "sticky" },
          top: { lg: "7rem" },
        }}
      >
        <ProfileCard name="Ionut Nitescu" title="Senior Full Stack Engineer" />
        <QuickStatsGrid stats={QUICK_STATS} />
      </Box>

      {/* ── Right column: narrative ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <JourneySection paragraphs={JOURNEY_PARAGRAPHS} />
        <CoreValuesSection values={CORE_VALUES} />
        <SkillsSection />
      </Box>
    </Box>
  );
}
