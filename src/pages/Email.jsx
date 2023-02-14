import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "32px",
    fontFamily: "'Inter', sans-serif",
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
    border: "1px solid darkcyan",
    padding: "10px 80px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
    background: "darkcyan",
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
const Email = () => {
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
        background: "#fff",
        maxWidth: "750px",
        padding: "60px",
        borderRadius: "8px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        margin: "auto",
        boxSizing: "border-box",
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <p className={classes.h2}>Send Me A Message</p>
        <TextField
          fullWidth
          size="small"
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          size="small"
          fullWidth
          id="email"
          type="email"
          name="email"
          label="Your Email"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          id="standard-textarea"
          name="message"
          label="Message"
          multiline
          variant="outlined"
          fullWidth
          rows={4}
        />
        <br />
        <br />
        {/* <textarea name="message" /> */}
        <input className={classes.button2} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Email;
