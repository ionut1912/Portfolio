import { Box } from "@mui/material";
import type { JSX } from "react";
import type { CoreValue } from "@/types/about";
import { GenericCard } from "@/components/shared/GenericCard";
import { SectionLabel } from "../../shared/SectionLabel";

interface CoreValuesSectionProps {
  values: CoreValue[];
}

export function CoreValuesSection({ values }: CoreValuesSectionProps): JSX.Element {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      <Box sx={{ textAlign: "center" }}>
        <SectionLabel text="Core" highlightText="Values" />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: "1.5rem",
        }}
      >
        {values.map((value) => (
          <GenericCard
            key={value.id}
            title={value.title}
            description={value.description}
            descriptionLines={5}
          />
        ))}
      </Box>
    </Box>
  );
}
