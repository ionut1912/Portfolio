import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";

interface SectionLabelProps {
  text: string;

  highlightText?: string; // Added this so you can pass the colored word easily
}

export function SectionLabel({ text, highlightText }: SectionLabelProps): JSX.Element {
  return (
    <Box
      component="h2"
      sx={{
        display: "inline-flex",

        alignItems: "center",

        justifyContent: "center",

        gap: "1rem", // Scaled up slightly for the bigger text

        m: 0,

        fontSize: { xs: "1.875rem", md: "2.25rem" },

        fontWeight: 700,

        letterSpacing: "-0.025em",
      }}
    >
      {/* The decorative line */}

      <Box
        component="span"
        sx={{
          width: "3rem",

          height: "4px", // Made it thicker to match the big text

          bgcolor: CUSTOM_COLORS.primary,

          flexShrink: 0,

          borderRadius: "2px",
        }}
      />

      {/* The text with optional highlight */}

      <Box component="span">
        {text}{" "}
        {highlightText ? (
          <Box component="span" sx={{ color: CUSTOM_COLORS.primary }}>
            {highlightText}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
