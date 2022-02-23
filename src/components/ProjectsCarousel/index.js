import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/system/Box";
import ProjectCard from "../ProjectCard";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

export const ProjectsCarousel = () => {
  return (
    <Box component="div" sx={{ maxWidth: "100%", margin: "1rem" }}>
      <Carousel autoPlay infiniteLoop={true} showStatus={false}>
        {items.map((item) => (
          <ProjectCard />
        ))}
      </Carousel>
    </Box>
  );
};

export default ProjectsCarousel;
