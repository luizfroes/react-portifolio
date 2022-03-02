import Container from "@mui/material/Container";
import SectionTitle from "../../components/SectionTitle";
import Divider from "@mui/material/Divider";
import { ContactForm } from "../../components/ContactForm";

export const Contact = () => {
  return (
    <Container maxWidth={false} component="section">
      <SectionTitle title="Contact Me" />
      <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
      <ContactForm />
    </Container>
  );
};

export default Contact;
