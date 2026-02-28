import { CUSTOM_COLORS } from "@/data/constants";
import { Box, Button } from "@mui/material";
import type { JSX } from "react";
import { FaCode, FaDownload } from "react-icons/fa";

export function HeroButtons(): JSX.Element {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
      <Button
        component="a"
        href="/cv.pdf"
        variant="contained"
        download="CV Nitescu Ionut.pdf"
        startIcon={<FaDownload />}
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
