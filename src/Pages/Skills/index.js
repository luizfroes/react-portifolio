import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SectionTitle from "../../components/SectionTitle";
import Stack from "@mui/material/Stack";

import { SkillsCard } from "../../components/SkillsCard";
import { cardContent } from "../../data";

export const Skills = () => {
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
      <SectionTitle title={"My Skills"} />
      <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-around">
        {cardContent.map((card, index) => (
          <SkillsCard card={card} key={index} />
        ))}
      </Stack>
    </Container>
  );
};

export default Skills;
