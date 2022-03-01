import React from "react";
import { withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import SectionTitle from "../../components/SectionTitle";
import Divider from "@mui/material/Divider";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#0466c8ff",
    },
    "& label": {
      color: "#979dac",
      fontFamily: "Bebas Neue, cursive",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#979dac",
      },
      "&:hover fieldset": {
        borderColor: "#0466c8ff",
      },
    },
  },
})(TextField);
export const Contact = () => {
  return (
    <Container component="section">
      <SectionTitle title="Contact Me" />
      <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
      <Box component="div">
        <Grid justifyContent="center">
          <Box component="form">
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
            <InputField
              fullWidth={true}
              label="Enter your name"
              variant="outlined"
              inputProps={{ style: { color: "#ffffff" } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Enter your email"
              variant="outlined"
              inputProps={{ style: { color: "#ffffff" } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Enter the subject"
              variant="outlined"
              inputProps={{ style: { color: "#ffffff" } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              multiline={true}
              label="Enter your message"
              variant="outlined"
              inputProps={{ style: { color: "#ffffff" } }}
              margin="dense"
              size="large"
            ></InputField>
            <br />
            <Box
              component="div"
              flexDirection="row"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
                sx={{
                  marginTop: "0.5rem",
                  color: "#979dac",
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "1rem",
                  width: "40%",
                }}
              >
                Send Mail
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
