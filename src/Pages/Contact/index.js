import Container from "@mui/material/Container";
import SectionTitle from "../../components/SectionTitle";
import Divider from "@mui/material/Divider";
import { ContactPage } from "../../components/ContactPage";

export const Contact = () => {
  return (
    <Container
      maxWidth={false}
      component="section"
      sx={{ width: "100%", height: "auto" }}
    >
      <SectionTitle title="Get in Touch" />
      <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
      <ContactPage />
    </Container>
  );
};

export default Contact;
