import Box from "@mui/system/Box";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const items = [1, 2, 3, 4, 5, 6, 7, 8];

export const ProjectsCarousel = () => {
  return (
    <Carousel>
      {items.map((item) => (
        <Box
          breakPoints={breakPoints}
          key={item}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            width: "100%",
            backgroundColor: "#683bb7",
            color: "#fff",
            margin: "15px",
            fontSize: "4em",
          }}
        >
          {item}
        </Box>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
