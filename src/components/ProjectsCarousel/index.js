import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled/macro";
import Box from "@mui/system/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ProjectCard from "../ProjectCard";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

export const ProjectsCarousel = () => {
  const StyledListItem = styled(ListItem)(() => ({
    width: "10.5rem",
    backgroundColor: "#0466c8ff",
    fontFamily: "Bebas Neue, cursive",
    display: "inline-block",
    padding: "0 0.3rem",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-out 0.4s",
    "&:hover": {
      background: "#001845ff",
    },
  }));
  return (
    <Box sx={{ maxWidth: "100%", margin: "1rem" }}>
      <Carousel autoPlay infiniteLoop={true} showStatus={false}>
        {items.map((item) => (
          <ProjectCard />
        ))}
      </Carousel>
      <List
        sx={{
          display: "flex",
          justifyContent: "space-around",
          "@media (max-width: 450px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <StyledListItem
          sx={{
            "@media (max-width: 450px)": {
              marginBottom: "1rem",
              width: "100%",
            },
            "@media (min-width: 700px)": {
              marginBottom: "1rem",
              width: "35%",
            },
          }}
        >
          <ListItemText
            disableTypography="true"
            sx={{
              textAlign: "center",
              color: "#979dac",
              fontFamily: "Bebas Neue, cursive",
              fontSize: "1rem",
            }}
          >
            GitHub Repository
          </ListItemText>
        </StyledListItem>
        <StyledListItem
          sx={{
            "@media (max-width: 450px)": {
              marginBottom: "1rem",
              width: "100%",
            },
            "@media (min-width: 700px)": {
              marginBottom: "1rem",
              width: "35%",
            },
          }}
        >
          <ListItemText
            disableTypography="true"
            sx={{
              textAlign: "center",
              color: "#979dac",
              fontFamily: "Bebas Neue, cursive",
              fontSize: "1rem",
            }}
          >
            Web Application
          </ListItemText>
        </StyledListItem>
      </List>
    </Box>
  );
};

export default ProjectsCarousel;
