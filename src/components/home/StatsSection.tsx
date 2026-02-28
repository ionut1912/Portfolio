import { STATS } from "@/data/portfolioData";
import { statValueSx, statLabelSx, cardSx } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";
import { GenericCard } from "@/components/shared/GenericCard";
import { SectionLabel } from "../shared/SectionLabel";

export interface StatsSectionProps {
  reposCount: number;
}

const allStats = (reposCount: number) => [
  ...STATS,
  { id: "repos", value: reposCount, label: "Number of repos" },
];

export function StatsSection({ reposCount }: StatsSectionProps): JSX.Element {
  return (
    <>
      <SectionLabel text="Quick" highlightText="Stats" />
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: "1.5rem",
          py: "2rem",
        }}
      >
        {allStats(reposCount).map((stat) => (
          <GenericCard
            key={stat.id}
            title={String(stat.value)}
            description={stat.label}
            sx={{
              ...cardSx,
              "& .gc-title": statValueSx,
              "& .gc-description": statLabelSx,
            }}
          />
        ))}
      </Box>
    </>
  );
}
