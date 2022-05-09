import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Resume from "@mui/icons-material/ArrowCircleDownOutlined";
import Email from "@mui/icons-material/Email";

export const ContactPage = () => {
  return (
    <Container
      margin="2rem"
      disableGutters="true"
      maxWidth={false}
      component="section"
      sx={{ width: "auto", justifyContent: "center" }}
    >
      <Button
        sx={{
          margin: "2rem",
          width: 200,
          height: 150,
          padding: 1,
          borderRadius: 5,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#0466c8ff",
          border: "1px solid #979dac",
          "&:hover": {
            backgroundColor: "#001219",
          },
        }}
        target="_blank"
        href="https://drive.google.com/file/d/1KXu656eKdQ8MJz7760Lo19G6CgyD91bQ/view?usp=sharing"
      >
        <Resume
          sx={{
            width: 80,
            height: 80,
            color: "#ffffff",
          }}
        />
        <Typography
          variant="h5"
          color="#ffffff"
          fontFamily="Bebas Neue, cursive"
        >
          Download Resume
        </Typography>
      </Button>
      <Button
        sx={{
          margin: "2rem",
          width: 200,
          height: 150,
          padding: 1,
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
        target="_blank"
        href="mailto:luizfroesgeo@gmail.com"
      >
        <Email
          sx={{
            width: 80,
            height: 80,
            color: "#ffffff",
          }}
        />
        <Typography
          variant="h5"
          color="#ffffff"
          fontFamily="Bebas Neue, cursive"
        >
          Email me
        </Typography>
      </Button>
      <Button
        sx={{
          margin: "2rem",
          width: 200,
          height: 150,
          padding: 1,
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
        target="_blank"
        href="https://www.linkedin.com/in/luiz-froes"
      >
        <LinkedIn
          sx={{
            width: 80,
            height: 80,
            color: "#ffffff",
          }}
        />
        <Typography
          variant="h5"
          color="#ffffff"
          fontFamily="Bebas Neue, cursive"
        >
          Visit my LinkedIn
        </Typography>
      </Button>
      <Button
        sx={{
          margin: "2rem",
          width: 200,
          height: 150,
          padding: 1,
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
        target="_blank"
        href="https://github.com/luizfroes"
      >
        <GitHub
          sx={{
            width: 80,
            height: 80,
            color: "#ffffff",
          }}
        />
        <Typography
          variant="h5"
          color="#ffffff"
          fontFamily="Bebas Neue, cursive"
        >
          Visit my GitHub
        </Typography>
      </Button>
    </Container>
  );
};
