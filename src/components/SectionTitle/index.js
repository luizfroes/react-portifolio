import Typography from "@mui/material/Typography";

export const SectionTitle = (props) => {
  return (
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
      {props.title}
    </Typography>
  );
};

export default SectionTitle;
