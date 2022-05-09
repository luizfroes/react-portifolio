import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/system/Box";

import aboutPortrait from "../../assets/img/about-picture.jpeg";
import SectionTitle from "../../components/SectionTitle";

export const About = () => {
  return (
    <Container
      maxWidth={false}
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
              Full Stack Web Developer leveraging my background in geography to
              build more intuitive user experiences on the web. Recently earned
              a certificate in Full Stack Web Development at the University of
              Birmingham. And Have honed my skills in JavaScript, HTML5, CSS,
              Bootstrap and jQuery, React.js, Node.js, Axios, Express,
              Handlebars, MySQL and responsive web design to develop meaningful
              server-side and client-side applications. Able to collaborate and
              work with a team while solving problems in high-stress
              environments. An articulate individual who enjoys connecting with
              co-workers and is passionate about building applications that
              assist everyday people to make their lives easier.
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
              matter. I'm always looking for new things to learn. Anything that
              can help me in expand my knowledge is always welcome.
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
  );
};

export default About;
