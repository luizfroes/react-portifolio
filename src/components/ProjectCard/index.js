import React from "react";
import styled from "@emotion/styled/macro";
import Box from "@mui/material/Box";
import projectImage1 from "../../foodtopia.png";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ProjectButtons } from "../ProjectsButtons";

export const ProjectCard = () => {
  const StyledTypographyTitle = styled(Typography)(() => ({
    margin: "0 0 20px",
    overflow: "auto",
    opacity: "0",
    transition: "all 0.3s",
  }));

  const StyledTypographyDesc = styled(Typography)(() => ({
    overflow: "auto",
    opacity: "0",
    transition: "all 0.3s",
  }));

  const StyledAvatar = styled(Avatar)(() => ({
    maxWidth: "100%",
    width: "auto",
    "@media (max-width: 600px)": {
      height: "55vh",
    },
    "@media (min-width: 600px)": {
      height: "60vh",
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
      [`${StyledTypographyTitle}`]: {
        opacity: "1",
        position: "absolute",
        top: "50%",
        right: "50%",
        "@media (max-width: 600px)": {
          transform: "translate(50%,10%)",
        },
        transform: "translate(50%,30%)",
        width: "100%",
      },
      [`${StyledTypographyDesc}`]: {
        opacity: "1",
        position: "absolute",
        top: "50%",
        right: "50%",
        "@media (max-width: 400px)": {
          transform: "translate(50%,100%)",
        },
        "@media (min-width: 600px)": {
          transform: "translate(50%,100%)",
        },
        "@media (min-width: 800px)": {
          transform: "translate(50%,100%)",
        },
        transform: "translate(50%,50%)",
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
            src={projectImage1}
          ></StyledAvatar>
          <StyledBoxDesc>
            <StyledTypographyTitle
              component="h5"
              disableTypography="true"
              sx={{
                fontSize: "2rem",
                "@media (min-width: 800px)": {
                  fontSize: "3rem",
                },
              }}
            >
              Mountain Morning
            </StyledTypographyTitle>
            <StyledTypographyDesc
              component="p"
              disableTypography="true"
              sx={{
                fontSize: "1rem",

                "@media (min-width: 800px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod.
            </StyledTypographyDesc>
          </StyledBoxDesc>
        </StyledBox>
        <ProjectButtons />
      </Container>
    </>
  );
};

export default ProjectCard;
