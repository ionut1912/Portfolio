import { Box, Typography, Link, Container } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 6,
        borderTop: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.08)",
        bgcolor: "var(--color-background-dark)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.875rem",
            color: "rgb(148, 163, 184)",
            fontWeight: 400,
          }}
        >
          © 2026 IonutDev. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Link
            href="https://www.linkedin.com/in/nitescu-cornel-ionut-452696279/"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "rgb(148, 163, 184)",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              "&:hover": { color: "var(--color-primary)" },
            }}
          >
            <FaLinkedin size={18} />
            <Typography component="span" sx={{ fontSize: "inherit", fontWeight: 500 }}>
              LinkedIn
            </Typography>
          </Link>

          <Link
            href="https://github.com/ionut1912"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "rgb(148, 163, 184)",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              "&:hover": { color: "var(--color-primary)" },
            }}
          >
            <FaGithub size={18} />
            <Typography component="span" sx={{ fontSize: "inherit", fontWeight: 500 }}>
              GitHub
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
