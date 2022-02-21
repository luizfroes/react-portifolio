import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import React from "react";
import ProjectCard from "../ProjectCard";
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
        <Stack>
          <Typography>Front End Projects</Typography>
          <Box>
            <ProjectCard />
          </Box>
        </Stack>
        <Stack>
          <Typography>Back End Projects</Typography>
          <Box>
            <ProjectCard />
          </Box>
        </Stack>
      </Stack>
      <ProjectsCarousel></ProjectsCarousel>
    </>
  );
};

export default Portifolio;
