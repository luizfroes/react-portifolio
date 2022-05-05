import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const ContactPage = () => {
  return (
    <Box component="div">
      <Grid justifyContent="center">
        <Typography
          sx={{
            margin: "1rem 0",
            color: "#979dac",
            fontFamily: "Bebas Neue, cursive",
            fontSize: "2rem",
          }}
        >
          Get in Touch
        </Typography>
        <Box>
          <Typography
            component={Link}
            target="_blank"
            href="https://drive.google.com/file/d/1KXu656eKdQ8MJz7760Lo19G6CgyD91bQ/view?usp=sharing"
          >
            Download Resume
          </Typography>
        </Box>
        <Box>
          <Typography component={Link} href="mailto:luizfroesgeo@gmail.com">
            Email me
          </Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            target="_blank"
            href="https://github.com/luizfroes"
          >
            Visit my GitHub
          </Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            target="_blank"
            href="https://www.linkedin.com/in/luiz-froes"
          >
            Visit my LinkedIn
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
