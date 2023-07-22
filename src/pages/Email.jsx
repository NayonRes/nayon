import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "32px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    margin: "0px 0px 50px 0px",
    color: "#061A38",
    position: "relative",
    textAlign: "center",

    "&:after": {
      content: "''",
      position: "absolute",
      top: 5,
      left: 0,
      width: "100%",
      height: "100%",
      // transform: "scale(0)",
      // background: "black",
      borderBottom: "2px solid #061A38",
    },
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px 35px 0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      margin: "0px 0px 25px 0px",
      "&:after": {
        // width: "80px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      "&:after": {
        // width: "50px",
      },
    },
  },
  button2: {
    border: "1px solid #ff4a57",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    background: "#ff4a57",
    // color: "#061A38",
    // background: "#E3E56D",
    cursor: "pointer",
    minWidth: "400px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 25px",
      minWidth: "200px",
    },
  },
}));
const Email = ({ darkMode }) => {
  const classes = useStyles();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9j9l6yr",
        "template_ar9ny7x",
        form.current,
        "user_UNIgRmIcSCjpZayRyloFK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      style={{
        // background: "#fff",
        // maxWidth: "750px",
        padding: "20px 0",
        borderRadius: "8px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        margin: "auto",
        boxSizing: "border-box",
        // background: darkMode && "rgba(174, 214, 241,.3)",
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        {/* <p className={classes.h2}>Send Me A Message</p> */}
        {/* <p className={classes.h2} style={{ color: darkMode && "#fff" }}>
                <span style={{ color: "#ff4a57" }}>Message</span> Me
              </p> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            {" "}
            <TextField
              fullWidth
              className={`${darkMode && "message_form_input_style"}`}
              size="small"
              id="name"
              name="name"
              placeholder="Your Name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              className={`${darkMode && "message_form_input_style"}`}
              size="small"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={`${darkMode && "message_form_textarea_style"}`}
              id="standard-textarea"
              name="message"
              placeholder="Message"
              multiline
              variant="outlined"
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              className={classes.button2}
              type="submit"
              value="Message Me"
            />
          </Grid>
        </Grid>

        {/* <textarea name="message" /> */}
      </form>
    </div>
  );
};

export default Email;
