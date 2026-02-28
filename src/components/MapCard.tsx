import { CUSTOM_COLORS } from "@/data/constants";
import { Box, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState, type JSX } from "react";

const MY_CITY = "Pitești, Romania";
const MY_LAT = 44.8565;
const MY_LNG = 24.8698;
const MY_TIMEZONE = "Europe/Bucharest";

const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${MY_LNG - 0.06},${MY_LAT - 0.06},${MY_LNG + 0.06},${MY_LAT + 0.06}&layer=mapnik&marker=${MY_LAT},${MY_LNG}`;

function useLocalTime(timezone: string) {
  const format = useCallback(
    () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      }),
    [timezone]
  );

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format), 1000);
    return () => clearInterval(id);
  }, [format]);

  return time;
}

export function MapCard(): JSX.Element {
  const localTime = useLocalTime(MY_TIMEZONE);
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: { xs: "4/3", lg: "1/1" },
        maxHeight: { xs: "400px", lg: "100%" },
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? CUSTOM_COLORS.slate800 : CUSTOM_COLORS.slate200,
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      }}
    >
      {!mapLoaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? CUSTOM_COLORS.slate800 : CUSTOM_COLORS.slate100,
            zIndex: 1,
          }}
        >
          <CircularProgress size={36} />
        </Box>
      )}

      <Box
        component="iframe"
        src={MAP_SRC}
        title="My Location"
        onLoad={() => setMapLoaded(true)}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        loading="lazy"
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? `${CUSTOM_COLORS.bgDark}E6`
              : `${CUSTOM_COLORS.bgLight}E6`,
          backdropFilter: "blur(12px)",
          p: "1rem",
          borderRadius: "0.75rem",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? CUSTOM_COLORS.slate700 : CUSTOM_COLORS.slate200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      >
        <Box>
          <Box
            component="p"
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              color: CUSTOM_COLORS.slate500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              m: 0,
            }}
          >
            Based in
          </Box>
          <Box
            component="p"
            sx={{
              fontWeight: 700,
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ffffff" : CUSTOM_COLORS.slate900,
              m: 0,
            }}
          >
            {MY_CITY}
          </Box>
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Box
            component="p"
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              color: CUSTOM_COLORS.slate500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              m: 0,
            }}
          >
            Local Time
          </Box>
          <Box
            component="p"
            sx={{
              fontFamily: "monospace",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: CUSTOM_COLORS.primary,
              textTransform: "uppercase",
              m: 0,
            }}
          >
            {localTime}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
