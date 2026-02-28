import { CUSTOM_COLORS } from "@/data/constants";
import { Box } from "@mui/material";
import type { JSX } from "react";
import profileImg from "@/assets/profile.jpeg";

interface ProfileCardProps {
  name: string;
  title: string;
}

export function ProfileCard({ name, title }: ProfileCardProps): JSX.Element {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/5",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: `0 25px 50px -12px ${CUSTOM_COLORS.primary}1A`,
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? CUSTOM_COLORS.slate800 : CUSTOM_COLORS.slate200,
        "&:hover .profile-image": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Photo */}
      <Box
        className="profile-image"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${profileImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.7s ease",
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Name / title badge */}
      <Box
        sx={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
          zIndex: 1,
        }}
      >
        {/* Open to work indicator */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", mb: "0.5rem" }}>
          <Box
            component="span"
            sx={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              bgcolor: "#22c55e",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.4 },
              },
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
          <Box
            component="span"
            sx={{
              color: "rgb(203, 213, 225)",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Open to work
          </Box>
        </Box>

        <Box component="h3" sx={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, m: 0 }}>
          {name}
        </Box>
        <Box
          component="p"
          sx={{ color: CUSTOM_COLORS.primary, fontSize: "0.875rem", fontWeight: 500, m: 0 }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
}
