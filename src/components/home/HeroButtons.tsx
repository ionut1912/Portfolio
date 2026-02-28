import { CUSTOM_COLORS } from "@/data/constants";
import { Box, Button } from "@mui/material";
import type { JSX } from "react";
import { FaCode, FaDownload } from "react-icons/fa";

async function handleDownloadCV() {
  try {
    const response = await fetch("/cv.pdf");
    if (!response.ok) {
      throw new Error(`Failed to download CV: ${response.status}`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV Nitescu Ionut.pdf";
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("CV download failed:", error);
  }
}
export function HeroButtons(): JSX.Element {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
      <Button
        variant="contained"
        startIcon={<FaDownload />}
        onClick={handleDownloadCV}
        sx={{
          bgcolor: CUSTOM_COLORS.primary,
          color: CUSTOM_COLORS.bgDark,
          fontWeight: 700,
          textTransform: "none",
          px: 3,
          py: 1.5,
          borderRadius: "0.75rem",
          "&:hover": { bgcolor: CUSTOM_COLORS.slate600 },
        }}
      >
        Download CV
      </Button>
      <Button
        component="a"
        href="https://github.com/ionut1912"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        startIcon={<FaCode />}
        sx={{
          bgcolor: CUSTOM_COLORS.slate800,
          color: CUSTOM_COLORS.bgLight,
          fontWeight: 600,
          textTransform: "none",
          px: 3,
          py: 1.5,
          borderRadius: "0.75rem",
          border: "1px solid rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: CUSTOM_COLORS.slate700 },
        }}
      >
        View GitHub
      </Button>
    </Box>
  );
}
