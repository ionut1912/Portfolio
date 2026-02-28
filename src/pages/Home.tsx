import { Box } from "@mui/material";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { fetchGitHubRepos } from "../../api/GithubService";
import { useState, useEffect, type JSX } from "react";
import type { GitHubRepo } from "@/types/Github";
import { FeatureReposSection } from "@/components/home/FeatureReposSection";

export default function Home(): JSX.Element {
  const [topRepos, setTopRepos] = useState<GitHubRepo[]>([]);
  const [reposLength, setReposLength] = useState<number>(0);
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetchGitHubRepos("ionut1912");
        const data = response.data as GitHubRepo[];
        setReposLength(data.length);
        setTopRepos(data.slice(0, 3));
      } catch {
        setReposLength(0);
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
        <FeatureReposSection topRepos={topRepos} />

        <StatsSection reposCount={reposLength} />
      </Box>
    </Box>
  );
}
