import type { JSX } from "react";
import { Box } from "@mui/material";
import { GenericCard } from "@/components/shared/GenericCard";

export interface QuickStat {
  value: string | number;
  label: string;
}

interface QuickStatsGridProps {
  stats: QuickStat[];
}

// Stat value with the primary-coloured "+" suffix
const StatValue = ({ value }: { value: string | number }) => (
  <Box
    component="span"
    sx={{ fontSize: "2.25rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}
  >
    {value}
    <Box component="span" sx={{ color: "var(--color-primary)", fontSize: "1.5rem" }}>
      +
    </Box>
  </Box>
);

export function QuickStatsGrid({ stats }: QuickStatsGridProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
      }}
    >
      {stats.map((stat) => (
        <GenericCard
          key={stat.label}
          title={<StatValue value={stat.value} />}
          description={stat.label}
          sx={{
            "& .gc-title": {
              fontSize: "unset",
              fontWeight: "unset",
              mb: "0.25rem",
            },
            "& .gc-description": {
              fontSize: "0.875rem",
              fontWeight: 500,
              mb: 0,
            },
          }}
        />
      ))}
    </Box>
  );
}
