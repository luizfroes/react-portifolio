import styled from "@emotion/styled/macro";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ProjectButtons } from "../ProjectsButtons";

export const ProjectCard = ({ project }) => {
  const StyledStack = styled(Stack)(() => ({
    overflow: "auto",
    opacity: "0",
    transition: "all 0.3s",
    padding: "0rem 1rem",
  }));

  const StyledAvatar = styled(Avatar)(() => ({
    maxWidth: "100%",
    width: "auto",
    "@media (max-width: 600px)": {
      height: "40vh",
    },
    "@media (min-width: 600px)": {
      height: "58vh",
    },
    "@media (min-width: 1200px)": {
      height: "48vh",
    },
    transform: "scale(1.3)",
    transition: "all 0.3s ease-out",
  }));

  const StyledBox = styled(Box)((theme) => ({
    width: "100%",
    height: "auto",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease-out",
    background: "radial-gradient(#111 50%, #000 100%)",
    "&:hover": {
      [`${StyledAvatar}`]: {
        transform: "scale(1.1) translateY(-20px)",
        opacity: "0.3",
      },
      [`${StyledStack}`]: {
        opacity: "1",
        position: "absolute",
        top: "50%",
        right: "50%",
        "@media (max-width: 600px)": {
          transform: "translate(50%,10%)",
        },
        transform: "translate(50%,40%)",
        width: "100%",
      },
    },
  }));

  const StyledBoxDesc = styled(Box)(() => ({
    position: "absolute",
    top: "0",
    left: "0",
    padding: "0.5rem",
    width: "100%",
    textAlign: "center",
    color: "#fff",
  }));
  return (
    <>
      <Container component="div" disableGutters="true" sx={{ width: "100%" }}>
        <StyledBox>
          <StyledAvatar
            variant="square"
            alt="Luiz Carlos Picture"
            src={project.image}
          ></StyledAvatar>
          <StyledBoxDesc>
            <StyledStack>
              <Typography
                component="h5"
                disableTypography="true"
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "2rem",
                  "@media (min-width: 700px)": {
                    fontSize: "3rem",
                  },
                }}
              >
                {project.title}
              </Typography>
              <Typography
                component="p"
                disableTypography="true"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Bebas Neue, cursive",
                  "@media (min-width: 700px)": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                {project.description}
              </Typography>
            </StyledStack>
          </StyledBoxDesc>
        </StyledBox>
        <ProjectButtons webUrl={project.webUrl} gitHubUrl={project.gitHubUrl} />
      </Container>
    </>
  );
};

export default ProjectCard;
