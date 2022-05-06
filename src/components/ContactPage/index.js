import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";

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
        <Box
          component={Link}
          target="_blank"
          href="https://drive.google.com/file/d/1KXu656eKdQ8MJz7760Lo19G6CgyD91bQ/view?usp=sharing"
        >
          <Typography>Download Resume</Typography>
        </Box>
        <Box component={Link} href="mailto:luizfroesgeo@gmail.com">
          <Typography>Email me</Typography>
        </Box>
        <Box
          component={Link}
          target="_blank"
          href="https://github.com/luizfroes"
        >
          <Typography>Visit my GitHub</Typography>
        </Box>
        <Link href="https://www.linkedin.com/in/luiz-froes" target="_blank">
          <Stack
            sx={{
              width: 200,
              height: 150,
              padding: 2,
              borderRadius: 5,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#0466c8ff",
              border: "1px solid #979dac",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <LinkedIn
              sx={{
                width: 80,
                height: 80,
                color: "#ffffff",
              }}
            />
            <Typography variant="h2" color="#ffffff">
              Visit my LinkedIn
            </Typography>
          </Stack>
        </Link>
      </Grid>
    </Box>
  );
};
