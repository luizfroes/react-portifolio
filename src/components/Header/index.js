import Typed from "react-typed";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "absolute",
        top: "20%",
        left: "15%",
        transform: "translate (50%, -50%)",
        textAlign: "center",
        zIndex: 1,
        "@media (min-width: 700px)": {
          left: "30%",
        },
        "@media (min-width: 1000px)": {
          left: "35%",
        },
      }}
    >
      <Typography
        sx={{
          marginTop: "3rem",
          fontSize: "2rem",
          "@media (min-width: 700px)": {
            fontSize: "3rem",
          },
        }}
      >
        <Typed
          style={{ color: "#ffffff" }}
          strings={["Hi, I am"]}
          typeSpeed={100}
        />
      </Typography>
      <Typography
        sx={{
          marginTop: "1rem",
          fontSize: "3rem",
          "@media (min-width: 700px)": {
            fontSize: "4rem",
          },
        }}
      >
        <Typed
          startDelay={1500}
          style={{ color: "#0466c8ff", padding: "1rem" }}
          strings={["Luiz Froes"]}
          typeSpeed={100}
        />
      </Typography>
      <Typography
        sx={{
          margin: "1rem 0rem",
          fontSize: "1rem",
          "@media (min-width: 700px)": {
            fontSize: "2rem",
          },
        }}
      >
        <Typed
          startDelay={3000}
          style={{ color: "#979dac" }}
          strings={["Software Engineer", "Full Stack Developer"]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
