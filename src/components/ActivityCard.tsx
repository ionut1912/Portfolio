import type { GitHubRepo } from "@/types/Github";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { GitCommit, ExternalLink } from "lucide-react";
import type { JSX } from "react";

function getTimeAgo(date: string): string {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

export const ActivityCard = ({ activity }: { activity: GitHubRepo }): JSX.Element => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "var(--color-card-dark)",
        backgroundImage: "none",
        borderRadius: "0.75rem",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease",
        cursor: "default",
        "&:hover": {
          borderColor: "var(--color-primary)",
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px -10px rgba(19, 182, 236, 0.2)",
          "& .activity-title": { color: "var(--color-primary)" },
          "& .external-icon": { color: "var(--color-primary)", opacity: 1 },
        },
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgb(148, 163, 184)" }}>
            <GitCommit size={16} />
            <Typography sx={{ fontFamily: "monospace", fontSize: "0.75rem", opacity: 0.8 }}>
              {activity.name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.75rem", color: "rgb(100, 116, 139)" }}>
            {getTimeAgo(activity.pushed_at)}
          </Typography>
        </Box>

        <Typography
          className="activity-title"
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
          {activity.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.875rem",
            color: "rgb(148, 163, 184)",
            lineHeight: 1.6,
            mb: 3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {activity.description ?? "No description provided."}
        </Typography>

        <Box
          sx={{
            mt: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "var(--color-primary)" }}
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
              {activity.language ?? "Unknown"}
            </Typography>
          </Box>

          <Box
            component="a"
            href={activity.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${activity.name} on GitHub`}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ExternalLink
              className="external-icon"
              size={18}
              style={{
                color: "rgb(100, 116, 139)",
                opacity: 0.6,
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
