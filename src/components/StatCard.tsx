import { Box, Typography } from "@mui/material";
import type { JSX } from "react";

interface Stat {
  id: string;
  value: string;
  label: string;
}

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps): JSX.Element {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "1rem",
        bgcolor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 1,
        transition: "all 0.3s ease",
        cursor: "default",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.1)",
          bgcolor: "rgba(255, 255, 255, 0.05)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.875rem",
          fontWeight: 800,
          color: "var(--color-primary)",
          lineHeight: 1,
        }}
      >
        {stat.value}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.875rem",
          color: "rgb(148, 163, 184)",
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  );
}
