import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

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

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            {...register("name", { required: true })}
            fullWidth={true}
            id="name"
            name="name"
            label="Enter your name"
            variant="outlined"
            inputProps={{ style: { color: "#ffffff" } }}
            margin="dense"
            size="medium"
          ></InputField>
          {errors.name?.type === "required" && (
            <Typography
              variant="subtitle2"
              sx={{ color: "#0466c8ff", fontFamily: "Bebas Neue, cursive" }}
            >
              Name is required
            </Typography>
          )}
          <br />
          <InputField
            {...register("email", {
              required: true,
            })}
            fullWidth={true}
            id="email"
            name="email"
            label="Enter your email"
            variant="outlined"
            inputProps={{ style: { color: "#ffffff" } }}
            margin="dense"
            size="medium"
          ></InputField>
          {errors.email?.type === "required" && (
            <Typography
              variant="subtitle2"
              sx={{ color: "#0466c8ff", fontFamily: "Bebas Neue, cursive" }}
            >
              Email is required
            </Typography>
          )}

          <InputField
            {...register("subject", { required: true })}
            fullWidth={true}
            id="subject"
            name="subject"
            label="Enter the subject"
            variant="outlined"
            inputProps={{ style: { color: "#ffffff" } }}
            margin="dense"
            size="medium"
          ></InputField>
          {errors.subject?.type === "required" && (
            <Typography
              variant="subtitle2"
              sx={{ color: "#0466c8ff", fontFamily: "Bebas Neue, cursive" }}
            >
              Subject is required
            </Typography>
          )}
          <br />
          <InputField
            {...register("message", { required: true })}
            fullWidth={true}
            multiline={true}
            id="message"
            name="message"
            label="Enter your message"
            variant="outlined"
            inputProps={{ style: { color: "#ffffff" } }}
            margin="dense"
            size="large"
          ></InputField>
          {errors.message?.type === "required" && (
            <Typography
              variant="subtitle2"
              sx={{ color: "#0466c8ff", fontFamily: "Bebas Neue, cursive" }}
            >
              Message is required
            </Typography>
          )}
          <br />
          <Box
            component="div"
            flexDirection="row"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              type="submit"
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
  );
};
