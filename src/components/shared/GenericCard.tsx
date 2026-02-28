import React from "react";
import { Box, Typography, Card as MuiCard, CardContent } from "@mui/material";
import type { JSX } from "react";
import type { GenericCardProps } from "@/types/genericCard";

export const GenericCard = ({
  badge,
  headerTrailing,
  title,
  description,
  descriptionLines = 2,
  meta,
  actions,
  children,
  sx,
  onClick,
}: GenericCardProps): JSX.Element => {
  return (
    <MuiCard
      onClick={onClick}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "var(--color-card-dark)",
        backgroundImage: "none",
        borderRadius: "0.75rem",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease",
        cursor: onClick ? "pointer" : "default",
        "&:hover": {
          borderColor: "var(--color-primary)",
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px -10px rgba(19, 182, 236, 0.2)",
          "& .gc-title": { color: "var(--color-primary)" },
          "& .gc-action-icon": { color: "var(--color-primary)", opacity: 1 },
        },
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* ── Header ──────────────────────────────────────────────────────── */}
        {badge || headerTrailing ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            {badge ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "rgb(148, 163, 184)",
                }}
              >
                {badge.icon}
                <Typography
                  className="gc-badge-label"
                  sx={{ fontFamily: "monospace", fontSize: "0.75rem", opacity: 0.8 }}
                >
                  {badge.label}
                </Typography>
              </Box>
            ) : (
              <Box />
            )}

            {headerTrailing ? (
              <Typography sx={{ fontSize: "0.75rem", color: "rgb(100, 116, 139)" }}>
                {headerTrailing}
              </Typography>
            ) : null}
          </Box>
        ) : null}

        {/* ── Title ───────────────────────────────────────────────────────── */}
        <Typography
          className="gc-title"
          variant="h6"
          sx={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "white",
            mb: 1.5,
            lineHeight: 1.4,
            transition: "color 0.2s",
          }}
        >
          {title}
        </Typography>

        {/* ── Description ─────────────────────────────────────────────────── */}
        {description !== undefined ? (
          <Typography
            className="gc-description"
            sx={{
              fontSize: "0.875rem",
              color: "rgb(148, 163, 184)",
              lineHeight: 1.6,
              mb: 3,
              display: "-webkit-box",
              WebkitLineClamp: descriptionLines,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description || "No description provided."}
          </Typography>
        ) : null}

        {/* ── Custom content ───────────────────────────────────────────────── */}
        {children}

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        {meta || actions?.length ? (
          <Box
            sx={{
              mt: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {meta ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: meta.dotColor ?? "var(--color-primary)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgb(148, 163, 184)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {meta.label}
                </Typography>
              </Box>
            ) : (
              <Box />
            )}

            {actions && actions.length > 0 ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {actions.map((action, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={action.href}
                    target={action.target ?? "_blank"}
                    rel="noopener noreferrer"
                    aria-label={action.ariaLabel}
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      className="gc-action-icon"
                      sx={{
                        color: "rgb(100, 116, 139)",
                        opacity: 0.6,
                        transition: "all 0.2s",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {action.icon}
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        ) : null}
      </CardContent>
    </MuiCard>
  );
};

export default GenericCard;
