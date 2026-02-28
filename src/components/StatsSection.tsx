import { STATS } from "@/data/portfolioData";
import { Box } from "@mui/material";
import type { JSX } from "react";
import { StatCard } from "./StatCard";

export interface StatsSectionProps {
  reposCount: number;
}

export function StatsSection({ reposCount }: StatsSectionProps): JSX.Element {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        gap: "1.5rem",
        py: "2rem",
      }}
    >
      {STATS.map((stat) => (
        <StatCard key={stat.id} value={stat.value} label={stat.label} />
      ))}
      <StatCard value={reposCount} label="Number of repos" />
    </Box>
  );
}
