import type { SxProps, Theme } from "@mui/material";

export const CUSTOM_COLORS = {
  primary: "#3b82f6", // Replace with your exact 'primary' hex
  bgDark: "#020617", // Replace with your exact 'background-dark' hex
  bgLight: "#ffffff", // Replace with your exact 'background-light' hex

  // Standard Tailwind Slate Palette (already matched to your original code)
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate400: "#94a3b8",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1e293b",
  slate900: "#0f172a",
};

export const cardSx: SxProps<Theme> = {
  p: 3,
  bgcolor: "var(--color-card-dark)",
  borderRadius: "0.75rem",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "0.75rem",
  cursor: "default",
  "&:hover": {
    borderColor: "var(--color-primary)",
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px -10px rgba(19, 182, 236, 0.2)",
    "& .stat-value": { color: "var(--color-primary)" },
  },
};

export const statValueSx: SxProps<Theme> = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "white",
  m: 0,
  lineHeight: 1,
  transition: "color 0.2s",
};

export const statLabelSx: SxProps<Theme> = {
  fontSize: "0.875rem",
  color: "rgb(148, 163, 184)",
  fontWeight: 500,
  m: 0,
};
