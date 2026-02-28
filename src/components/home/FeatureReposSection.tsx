import { CUSTOM_COLORS } from "@/data/constants";
import type { GitHubRepo } from "@/types/Github";
import { Box } from "@mui/material";
import type { JSX } from "react";
import { SectionLabel } from "../shared/SectionLabel";
import { ReposCard } from "../shared/ReposCard";

interface ActivityProps {
  topRepos: GitHubRepo[];
}

export function FeatureReposSection({ topRepos }: ActivityProps): JSX.Element {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Section header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-end" }, // Centers on mobile, aligns bottom on desktop
          justifyContent: "space-between",
          gap: "1.5rem",
          borderBottom: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? CUSTOM_COLORS.slate800 : CUSTOM_COLORS.slate200,
          pb: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center" } }}>
          {/* We just call SectionLabel directly now! */}
          <SectionLabel text="Most" highlightText="featured repos" />

          <Box
            component="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? CUSTOM_COLORS.slate400 : CUSTOM_COLORS.slate500,
              fontSize: "0.875rem",
              mt: "0.5rem",
              mb: 0,
              mx: 0,
              // Optically aligns the subtitle with the text on desktop (skipping the 3rem line + 1rem gap)
              ml: { xs: 0, sm: "4rem" },
              textAlign: { xs: "center", sm: "left" },
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
          <ReposCard key={repo.id} repo={repo} />
        ))}
      </Box>
    </Box>
  );
}
