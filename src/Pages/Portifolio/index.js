import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/SectionTitle";
import Box from "@mui/system/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

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
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {projects.frontEndProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </Carousel>
          </Box>
        </Stack>
        <Stack sx={{ height: "80%", width: "100%" }}>
          <Typography>Back End Projects</Typography>
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {projects.backEndProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </Carousel>
          </Box>
        </Stack>
        <Stack sx={{ height: "80%", width: "100%" }}>
          <Typography>Full Stack Projects</Typography>
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {projects.fullStackProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </Carousel>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Portifolio;
