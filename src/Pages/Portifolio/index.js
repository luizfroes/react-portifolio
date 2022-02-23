import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";
import SectionTitle from "../../components/SectionTitle";

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
        <Stack sx={{ height: "80%", width: "100%" }}>
          <Typography>Back End Projects</Typography>
          <ProjectsCarousel />
        </Stack>
      </Stack>
    </>
  );
};

export default Portifolio;
