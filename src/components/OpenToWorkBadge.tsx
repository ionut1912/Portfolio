import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";

export function OpenToWorkBadge(): JSX.Element {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        px: "0.75rem",
        py: "0.25rem",
        borderRadius: "9999px",
        backgroundColor: `${CUSTOM_COLORS.primary}1A`,
        color: CUSTOM_COLORS.primary,
        width: "fit-content",
        border: "1px solid",
        borderColor: `${CUSTOM_COLORS.primary}33`,
      }}
    >
      <Box
        component="span"
        sx={{
          width: "0.5rem",
          height: "0.5rem",
          borderRadius: "9999px",
          backgroundColor: CUSTOM_COLORS.primary,
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.5 },
          },
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
      <Box
        component="span"
        sx={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Open to work
      </Box>
    </Box>
  );
}
