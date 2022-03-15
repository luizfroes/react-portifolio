import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/SectionTitle";
import Box from "@mui/system/Box";
import Divider from "@mui/material/Divider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/index";

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
        <Divider sx={{ color: "#979dac", margin: "1rem 0 3rem" }} />
        <Stack spacing={4} sx={{ width: "100%" }}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              fontFamily: "Bebas Neue, cursive",
              color: "#979dac",
              paddingTop: "1rem",
            }}
          >
            Front End Projects
          </Typography>
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {projects.frontEndProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </Carousel>
          </Box>
        </Stack>
        <Divider sx={{ color: "#979dac", marginBottom: "3rem" }} />
        <Stack spacing={4} sx={{ height: "80%", width: "100%" }}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              fontFamily: "Bebas Neue, cursive",
              color: "#979dac",
              paddingTop: "1rem",
            }}
          >
            Back End Projects
          </Typography>
          <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
            <Carousel autoPlay infiniteLoop={true} showStatus={false}>
              {projects.backEndProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </Carousel>
          </Box>
        </Stack>
        <Divider sx={{ color: "#979dac", marginBottom: "3rem" }} />
        <Stack spacing={4} sx={{ height: "80%", width: "100%" }}>
          <Typography
            align="center"
            variant="h5"
            sx={{
              fontFamily: "Bebas Neue, cursive",
              color: "#979dac",
              paddingTop: "1rem",
            }}
          >
            Full Stack Projects
          </Typography>
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
