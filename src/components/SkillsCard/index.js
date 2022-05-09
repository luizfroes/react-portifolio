import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const SkillsCard = ({ card }) => {
  return (
    <Card
      sx={{
        border: "2px solid #979dac",
        bgcolor: "#001219",
        fontFamily: "Bebas Neue, cursive",
        color: "#979dac",
        mb: "1rem",
        width: "40%",
        height: "auto",
        "@media (max-width: 800px)": {
          width: "80%",
        },
        "@media (max-width: 400px)": {
          width: "100%",
        },
      }}
    >
      <CardContent>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          mb="2rem"
          sx={{
            color: "#0466c8ff",
            fontWeight: "bold",
            "@media (max-width: 400px)": {
              fontSize: "1.6rem",
              textAlign: "left",
            },
          }}
        >
          {card.icon}
          {card.title}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          mb="2rem"
          sx={{
            textAlign: "justify",
            "@media (max-width: 400px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {card.description}
        </Typography>
        <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
        <Typography
          variant="h5"
          component="h5"
          mb="1rem"
          sx={{
            fontWeight: "bold",
            "@media (max-width: 400px)": {
              fontSize: "1.4rem",
            },
          }}
        >
          SKILLS
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          p="0 2rem"
          mb="2rem"
          sx={{
            textAlign: "justify",
            "@media (max-width: 400px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {card.skills}
        </Typography>
        <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
        <Typography
          variant="h5"
          component="h5"
          mb="1rem"
          sx={{
            fontWeight: "bold",
            "@media (max-width: 400px)": {
              fontSize: "1.4rem",
            },
          }}
        >
          TOOLS
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          p="0 2rem"
          sx={{
            textAlign: "justify",
            "@media (max-width: 400px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {card.tools}
        </Typography>
      </CardContent>
    </Card>
  );
};
