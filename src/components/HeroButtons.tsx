import { Box, Button } from "@mui/material";
import { Download, Code } from "lucide-react";
import type { JSX } from "react";

export function HeroButtons(): JSX.Element {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
      <Button
        component="a"
        href="/cv.pdf"
        variant="contained"
        download="CV  Nitescu Ionut.pdf"
        startIcon={<Download />}
        sx={{
          bgcolor: "#13b6ec",
          color: "#020617",
          fontWeight: 700,
          textTransform: "none",
          px: 3,
          py: 1.5,
          borderRadius: "0.75rem",
          "&:hover": { bgcolor: "#11a0cf" },
        }}
      >
        Download CV
      </Button>
      <Button
        component="a"
        href="https://github.com/ionut1912"
        variant="contained"
        startIcon={<Code />}
        sx={{
          bgcolor: "#1e293b",
          color: "white",
          fontWeight: 600,
          textTransform: "none",
          px: 3,
          py: 1.5,
          borderRadius: "0.75rem",
          border: "1px solid rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: "#334155" },
        }}
      >
        View GitHub
      </Button>
    </Box>
  );
}
