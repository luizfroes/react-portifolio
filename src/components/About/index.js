import React from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

import aboutPortrait from "../../about-picture.jpeg";

export const About = () => {
  const socialMediaIcons = [
    {
      id: "1",
      listIcon: <Instagram />,
      listUrl: "https://www.instagram.com/luizfroesgeo/",
    },
    {
      id: "2",
      listIcon: <GitHub />,
      listUrl: "https://github.com/luizfroes",
    },
    {
      id: "3",
      listIcon: <LinkedIn />,
      listUrl: "https://www.linkedin.com/in/luiz-froes",
    },
  ];
  return (
    <>
      <Container
        component="section"
        maxWidth="false"
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            width: "max-content",
            fontFamily: "Bebas Neue, cursive",
            marginTop: "5rem",
            color: "#ffffff",
            "&:hover": {
              color: "#0466c8ff",
            },
          }}
          variant="h3"
          component="h1"
        >
          Me, My self and I
        </Typography>
        <Grid container="true" sx={{ flexWrap: "wrap" }}>
          <Grid mt={3} sm={12} md={12} lg={6}>
            <Avatar
              variant="square"
              alt="Luiz Carlos Picture"
              src={aboutPortrait}
              sx={{
                padding: "1rem 1rem 1rem 0rem",
                width: "100%",
                height: "auto",
              }}
            ></Avatar>
          </Grid>
          <Grid mt={4} sm={12} md={12} lg={6}>
            <Container disableGutters="true">
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#979dac",
                  marginBottom: "1rem",
                  fontSize: "2rem",
                }}
                align="justify"
              >
                Hi, I'm <span class="span-name">Luiz Froes</span>
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
              <Container
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {socialMediaIcons.map((listIcon, key) => (
                    <ListItem
                      component={Link}
                      alignItems="center"
                      href={listIcon.listUrl}
                      sx={{
                        width: "fit-content",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "#979dac",
                          "&:hover": {
                            color: "#0466c8ff",
                          },
                        }}
                      >
                        {listIcon.listIcon}
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
