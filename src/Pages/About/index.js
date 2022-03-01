import React from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

import aboutPortrait from "../../about-picture.jpeg";
import SectionTitle from "../../components/SectionTitle";
import Box from "@mui/system/Box";

export const About = () => {
  return (
    <>
      <Container
        component="section"
        disableGutters="true"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "0 1rem",
        }}
      >
        <SectionTitle title={"Me, My self and I"} />
        <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
        <Grid container="true" wrap="wrap">
          <Grid item={true} mt={3} xs={12} md={5} lg={6}>
            <Avatar
              variant="square"
              alt="Luiz Carlos Picture"
              src={aboutPortrait}
              sx={{
                padding: "1rem 1rem 1rem 0rem",
                "@media (max-width: 900px)": {
                  padding: "0",
                },
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item={true} mt={4} xs={12} md={7} lg={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#979dac",
                  marginBottom: "1rem",
                  fontSize: "2rem",
                }}
                align="justify"
              >
                Hi, I'm <span className="span-name">Luiz Froes</span>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#979dac",
                  marginBottom: "1rem",
                  fontSize: "1.15rem",
                }}
                align="justify"
              >
                I'm a Full Stack Web Developer and a Software Engineer located
                in Birmingham, U.K. and seeking a path in the Tech industry. I'm
                also a Geographer, a Chef, a music enthusiast, a traveller and
                more.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#979dac",
                  marginBottom: "1rem",
                  fontSize: "1.15rem",
                }}
                align="justify"
              >
                I do not like to define myself by what I have done. I like to
                define myself by what I want to do. I prefer to keep learning,
                continue challenging myself, and do interesting things that
                matter. I'm always looking for new things to learn. Anything
                that can help me in expand my knowledge is always welcome.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#979dac",
                  marginBottom: "1rem",
                  fontSize: "1.15rem",
                }}
                align="justify"
              >
                Fuelled with abundant energy and high levels of enthusiasm, I am
                easily inspired and more then willing to follow my fascinations
                wherever they take me. I am expressive, passionate and almost
                impulsive in giving life to ideas, transforming them in reality.
                Any spare time I have to work on side projects to further my
                skills so that I can apply these to real projects. And when I am
                not coding in front of a screen I will be playing my guitar or
                probably travelling to somewhere with my family.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
