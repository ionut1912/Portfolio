import { Box } from "@mui/material";
import { HeroSection } from "@/components/HeroSection";
import { RecentActivitySection } from "@/components/RecentActivitySection";
import { StatsSection } from "@/components/StatsSection";
import axios from "axios";
import { useState, useEffect, type JSX } from "react";
import { SkillsSection } from "@/components/SkillsSection";
import type { GitHubRepo } from "@/types/Github";

export default function Home(): JSX.Element {
  const [topRepos, setTopRepos] = useState<GitHubRepo[]>([]);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  useEffect(() => {
    async function fetchRepos() {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/ionut1912/repos?sort=pushed"
        );
        setRepos(data);
        setTopRepos(data.slice(0, 3));
      } catch {
        setRepos([]);
        setTopRepos([]);
      }
    }
    void fetchRepos();
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 3 },
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 8, md: 8 },
        }}
      >
        <HeroSection />
        <RecentActivitySection topRepos={topRepos} />
        <StatsSection reposCount={repos.length} />
        <SkillsSection />
      </Box>
    </Box>
  );
}
