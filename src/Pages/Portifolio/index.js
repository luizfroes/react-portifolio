import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/system/Box";
import { ProjectCard } from "../../components/ProjectCard";

const items = [1, 2, 3, 4, 5, 6, 7, 8];
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
              {items.map((item) => (
                <ProjectCard />
              ))}
            </Carousel>
          </Box>
        </Stack>
        <Stack sx={{ height: "80%", width: "100%" }}>
          <Typography>Back End Projects</Typography>
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {items.map((item) => (
                <ProjectCard />
              ))}
            </Carousel>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Portifolio;
