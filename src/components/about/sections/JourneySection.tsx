import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";
import { SectionLabel } from "../../shared/SectionLabel";

interface JourneySectionProps {
  paragraphs: string[];
}

export function JourneySection({ paragraphs }: JourneySectionProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <SectionLabel text="My Journey" />

      <Box
        component="h1"
        sx={{
          background: `linear-gradient(135deg, ${CUSTOM_COLORS.primary}, #60a5fa)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Crafting digital experiences with{" "}
        <Box
          component="span"
          sx={{
            background: `linear-gradient(135deg, ${CUSTOM_COLORS.primary}, #60a5fa)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          precision & passion.
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {paragraphs.map((text, i) => (
          <Box
            key={i}
            component="p"
            sx={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              m: 0,
              color: (theme) =>
                theme.palette.mode === "dark" ? CUSTOM_COLORS.slate400 : CUSTOM_COLORS.slate600,
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
