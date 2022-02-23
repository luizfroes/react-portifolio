import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import React from "react";
import ProjectsCarousel from "../ProjectsCarousel";
import SectionTitle from "../SectionTitle";

export const Portifolio = () => {
  return (
    <>
      <Stack
        component="section"
        sx={{
          padding: "0 24px",
          flexDirection: "column",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <SectionTitle title="Portifolio" />
        <Stack sx={{ width: "100%" }}>
          <Typography>Front End Projects</Typography>

          <ProjectsCarousel />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography>Back End Projects</Typography>

          <ProjectsCarousel />
        </Stack>
      </Stack>
    </>
  );
};

export default Portifolio;
