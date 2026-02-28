import { STATS } from "@/data/portfolioData";
import { Box } from "@mui/material";
import type { JSX } from "react";

export interface StateSectionProps {
  reposCount: number;
}

export function StatsSection({ reposCount }: StateSectionProps): JSX.Element {
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
        <Box
          key={stat.id}
          sx={{
            p: 3,
            bgcolor: "var(--color-card-dark)",
            borderRadius: "0.75rem",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "0.75rem",
            cursor: "default",
            "&:hover": {
              borderColor: "var(--color-primary)",
              transform: "translateY(-4px)",
              boxShadow: "0 10px 30px -10px rgba(19, 182, 236, 0.2)",
              "& .stat-value": { color: "var(--color-primary)" },
            },
          }}
        >
          <Box
            className="stat-value"
            component="h4"
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "white",
              m: 0,
              lineHeight: 1,
              transition: "color 0.2s",
            }}
          >
            {stat.value}
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: "0.875rem",
              color: "rgb(148, 163, 184)",
              fontWeight: 500,
              m: 0,
            }}
          >
            {stat.label}
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          p: 3,
          bgcolor: "var(--color-card-dark)",
          borderRadius: "0.75rem",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0.75rem",
          cursor: "default",
          "&:hover": {
            borderColor: "var(--color-primary)",
            transform: "translateY(-4px)",
            boxShadow: "0 10px 30px -10px rgba(19, 182, 236, 0.2)",
            "& .stat-value": { color: "var(--color-primary)" },
          },
        }}
      >
        <Box
          className="stat-value"
          component="h4"
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "white",
            m: 0,
            lineHeight: 1,
            transition: "color 0.2s",
          }}
        >
          {reposCount}
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: "0.875rem",
            color: "rgb(148, 163, 184)",
            fontWeight: 500,
            m: 0,
          }}
        >
          Number of repos
        </Box>
      </Box>
    </Box>
  );
}
