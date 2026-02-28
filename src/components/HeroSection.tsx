import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import { HeroButtons } from "./HeroButtons";
import { MapCard } from "./MapCard";
import { OpenToWorkBadge } from "./OpenToWorkBadge";
import type { JSX } from "react";

export function HeroSection(): JSX.Element {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
        gap: "3rem",
        alignItems: "center",
      }}
    >
      {/* Left column — text */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <OpenToWorkBadge />

        <Box
          component="h1"
          sx={{
            fontSize: { xs: "2.25rem", md: "3rem", lg: "3.75rem" },
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.025em",
            m: 0,
          }}
        >
          Hi, I&apos;m Ionut. <br />
          <Box
            component="span"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? CUSTOM_COLORS.slate500 : CUSTOM_COLORS.slate400,
            }}
          >
            Full Stack Engineer.
          </Box>
        </Box>

        <Box
          component="p"
          sx={{
            fontSize: "1.125rem",
            color: (theme) =>
              theme.palette.mode === "dark" ? CUSTOM_COLORS.slate400 : CUSTOM_COLORS.slate600,
            maxWidth: "32rem",
            lineHeight: 1.625,
            m: 0,
          }}
        >
          Building accessible, pixel-perfect web experiences. Currently a Senior Engineer at
          KrukTech, crafting the future of digital products.
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", pt: "0.5rem" }}>
          <HeroButtons />
        </Box>
      </Box>

      {/* Right column — map */}
      <MapCard />
    </Box>
  );
}
