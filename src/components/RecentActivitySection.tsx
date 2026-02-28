import { ActivityCard } from "@/components/ActivityCard";
import { CUSTOM_COLORS } from "@/data/constants";
import type { GitHubRepo } from "@/types/Github";
import { Box } from "@mui/material";
import type { JSX } from "react";
interface ActivityProps {
  topRepos: GitHubRepo[];
}

export function RecentActivitySection({ topRepos }: ActivityProps): JSX.Element {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Section header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "flex-end" },
          justifyContent: "space-between",
          gap: "1rem",
          borderBottom: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? CUSTOM_COLORS.slate800 : CUSTOM_COLORS.slate200,
          pb: "1rem",
        }}
      >
        <Box>
          <Box
            component="h2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              m: 0,
            }}
          >
            Most Featured Repos
          </Box>
          <Box
            component="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? CUSTOM_COLORS.slate400 : CUSTOM_COLORS.slate500,
              mt: "0.25rem",
              fontSize: "0.875rem",
              m: 0,
            }}
          >
            Latest repos from GitHub
          </Box>
        </Box>

        <Box
          component="a"
          href="/projects"
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: CUSTOM_COLORS.primary,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.8 },
          }}
        >
          View all
        </Box>
      </Box>

      {/* Cards grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: "1.5rem",
        }}
      >
        {topRepos.map((repo) => (
          <ActivityCard key={repo.id} activity={repo} />
        ))}
      </Box>
    </Box>
  );
}
