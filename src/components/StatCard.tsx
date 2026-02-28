import { statValueSx, statLabelSx, cardSx } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX, ReactNode } from "react";

interface StatCardProps {
  value: ReactNode;
  label: string;
}

export function StatCard({ value, label }: StatCardProps): JSX.Element {
  return (
    <Box sx={cardSx}>
      <Box className="stat-value" component="h4" sx={statValueSx}>
        {value}
      </Box>
      <Box component="p" sx={statLabelSx}>
        {label}
      </Box>
    </Box>
  );
}
