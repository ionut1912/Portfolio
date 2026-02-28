import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";

export default function SkillProgress({ level }: { level: number }): JSX.Element {
  return (
    <Box sx={{ mt: "0.25rem" }}>
      <Box
        sx={{
          height: 5,
          borderRadius: 99,
          bgcolor: "rgba(255,255,255,0.07)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${level}%`,
            borderRadius: 99,
            background: `linear-gradient(90deg, ${CUSTOM_COLORS.primaryDark}, ${CUSTOM_COLORS.primary})`,
            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </Box>
      <Box
        component="span"
        sx={{
          display: "block",
          textAlign: "right",
          mt: "0.3rem",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: CUSTOM_COLORS.slate400,
        }}
      >
        {level}%
      </Box>
    </Box>
  );
}
