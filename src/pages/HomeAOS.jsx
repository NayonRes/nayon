import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import nayon from "../assets/images/nayon.jpg";
import Image1 from "../assets/images/Image1.png";
import fbIcon from "../assets/images/fbIcon.png";
import logo from "../assets/images/logo4.png";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarDrawer from "./NavbarDrawer";
import WhatIKnow from "./WhatIKnow";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  themeBackground: {
    background: "#5AFF80",
    boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
  },
  homeContainerStyle: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  homeSectionStyle: {
    minHeight: "calc(100vh - 70px)",
    display: "flex !important",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      minHeight: "700px",
    },
    [theme.breakpoints.down("lg")]: {
      minHeight: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 70px)",
    },
  },

  BrandNameStyle: {
    fontSize: "30px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,

    color: "#061A38",
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   lineHeight: "65px",
  },
  h1: {
    fontSize: "70px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    lineHeight: "80px",
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "45px",
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "35px",
      textAlign: "center",
    },
  },
  h2: {
    fontSize: "45px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0px 0px 50px 0px",
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px 35px 0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      margin: "0px 0px 15px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  h3: {
    fontSize: "30px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  h4: {
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  h5: {
    fontSize: "20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#061A38",
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  workCardText: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#061A38",
    margin: "10px 0 0 0",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      margin: "5px 0 0 0",
    },
  },
  pictureHolder: {
    background: "transparent",
    border: "2px solid #fff",
    width: "330px !important",
    height: "330px",
    margin: "auto",
    borderRadius: "50% 25%",
    [theme.breakpoints.down("xl")]: {
      width: "260px !important",
      height: "260px",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px !important",
      height: "180px",
    },
  },
  pictureBox: {
    width: "300px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "50% 25%",
    [theme.breakpoints.down("xl")]: {
      width: "230px",
      height: "230px",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
    },
  },
  NotCard: {
    padding: "30px",

    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
  },
  card: {
    padding: "30px",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
  },
  cardImage: {
    maxWidth: "120px",
    [theme.breakpoints.down("xl")]: {
      maxWidth: "85px",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40px",
    },
  },
  cardTitle: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "12px 0px",
    color: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      margin: "10px 0px",
    },
  },
  cardDetail: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    margin: "0px 0px 24px 0px",
    color: "#061A38",
    lineHeight: 1.4,
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
      margin: "0px 0px 10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  cardButton: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#5AFF80",
    cursor: "pointer",
    padding: "0px 0px 8px 0px",
    display: "inline-block",
    borderBottom: "2px solid #5AFF80",
    transition: ".5s",
    "&:hover": {
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  navbarStyle: {
    height: "70px",
    background: "#5AFF80",
    // borderRadius: "16px 16px 0px 0px",

    bottom: 0,
    boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuItem: {
    fontSize: "18px",
    // fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#061A38",
    position: "relative",
    padding: "5px 20px",
    zIndex: 2,
    // "&:hover": {
    //   color: "#fff",
    // },
    // "&:before": {
    //   content: "''",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   borderBottom: "1px solid #000",
    //   borderTop: "1px solid #000",
    //   transform: "scaleY(2)",
    //   opacity: 0,
    //   transition: ".5s",
    //   zIndex: -1,
    // },
    // "&:hover:before": {
    //   opacity: 1,
    //   transform: "scaleY(1)",
    // },
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transform: "scale(0)",
      // background: "black",
      transition: ".5s",
      zIndex: -1,
      border: "1px solid #061A38",
      borderRadius: "10px",
    },
    "&:hover:after": {
      transform: "scale(1)",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "8px",
    },
  },
  logoStyle: {
    height: "45px",
    marginRight: "10px",
    display: "inherit",
  },
  imageStyle: {
    padding: "5px",
    border: "1px solid #F2F2F2",
    borderRadius: "5px",
    display: "block",
    marginLeft: "auto",
  },

  iconButtonStyle: {
    color: "black !important",
    border: "none !important",
    paddingLeft: "4px !important",
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "600 !important",
  },
  iconButtonStyle2: {
    color: "#666E7A !important",
    border: "1px solid #E5E5E5 !important",
    borderRadius: "25px !important",
    fontSize: "13px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "400 !important",
    ["& .MuiButton-startIcon"]: {
      marginRight: "2px !important",
    },
  },

  centerIcon: {
    display: "block",
    margin: "12px auto 7px auto",
  },
  itemStyle: {
    marginLeft: "30px !important",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      marginLeft: "10px !important",
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "8px",
    // },
  },

  active: {
    // ["& p"]: {
    //   color: "black",
    //   fontWeight: 600,
    // },
    // ["& h4"]: {
    //   color: "black",
    //   fontWeight: 600,
    // },
    // borderBottom: "2px solid black",
    border: "2px solid #061A38",
    borderRadius: "10px",
  },

  buttonStyle: {
    background: "black !important",
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  cardContainer: {
    borderBottom: "2px solid #F2EFEF",
    "&:last-child": {
      borderBottom: "2px solid rgba(0,0,0,0)",
    },
  },
  inputStyle: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 4px",
  },
  // hrStyle: {
  //   borderRadius: "5px",
  //   border: "0.3px solid #E5E7E9",
  // },
  cardBox: {
    borderBottom: "1px solid #E5E7E9",
  },
  workDivStyle: {
    height: "450px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      height: "250px",
    },
    [theme.breakpoints.down("md")]: {
      height: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
  },
  workHoverDiv: {
    position: "absolute",
    zIndex: 5,
    background: "#5AFF8070",
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".5s",
    "&:hover": {
      opacity: 1,
    },
  },
  workHoverDivText: {
    position: "absolute",
    left: "30px",
    bottom: "30px",
    [theme.breakpoints.down("sm")]: {
      left: "10px",
      bottom: "10px",
    },
  },
  button: {
    border: "1px solid #061A38",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    color: "#061A38",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      background: "#061A3850",
    },
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 15px",
    },
  },
  button2: {
    border: "1px solid #061A38",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
    cursor: "pointer",
    background: "#061A38",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 15px",
    },
  },
  iconDiv: {
    width: "40px",
    height: "40px",
    border: "1px solid #061A38",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  iconStyle: {
    color: "#061A38",
    fontSize: "25px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
    },
    transition: ".5s !important",
    "&:hover": {
      transform: "scaleX(-1)",
    },
  },
  sectionPaddingAllSide: {
    padding: "50px",
    [theme.breakpoints.down("xl")]: {
      padding: "50px 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  sectionPaddingWithoutBottom: {
    padding: "50px 50px 0 50px",
    [theme.breakpoints.down("xl")]: {
      padding: "50px 200px 0 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "50px 50px 0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 0 20px",
    },
  },
  sectionPaddingRightLeft: {
    padding: "0 50px",
    [theme.breakpoints.down("xl")]: {
      padding: "0 200px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  nameBox: {
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  myInfoBox: {
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  myImageBox: {
    [theme.breakpoints.down("md")]: {
      order: 1,
      marginBottom: "30px !important",
    },
  },
  marginBottomStyle: {
    marginBottom: "20px",
    [theme.breakpoints.down("xl")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "12px",
    },
  },
  designationStyle: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  cardTitleMargin: {
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8px",
    },
  },
  contactButtonBox: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginTop: "20px !important",
    },
  },
  borderStyle1: {
    borderRight: "1px solid #5AFF80",
    borderBottom: "1px solid #5AFF80",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #5AFF80",
      borderTop: "1px solid #5AFF80",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle2: {
    borderBottom: "1px solid #5AFF80",
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #5AFF80",
      borderLeft: "1px solid #5AFF80",
      borderTop: "1px solid #5AFF80",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle3: {
    borderRight: "1px solid #5AFF80",

    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #5AFF80",
      borderTop: "1px solid #5AFF80",
      borderBottom: "1px solid #5AFF80",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle4: {
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #5AFF80",
      borderLeft: "1px solid #5AFF80",
      borderTop: "1px solid #5AFF80",
      borderBottom: "1px solid #5AFF80",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  ForOtherVersion: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ForMobileVersion: {
    display: "none",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const experienceData = [
    {
      designation: "Strategy & Direction",
      duration: "March 2020 - Present",
      company: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      designation: "Strategy & Direction",
      duration: "March 2020 - Present",
      company: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      designation: "Strategy & Direction",
      duration: "March 2020 - Present",
      company: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      designation: "Strategy & Direction",
      duration: "March 2020 - Present",
      company: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const educationData = [
    {
      subject: "Strategy & Direction",
      session: "March 2020 - Present",
      institute: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      subject: "Strategy & Direction",
      session: "March 2020 - Present",
      institute: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      subject: "Strategy & Direction",
      session: "March 2020 - Present",
      institute: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      subject: "Strategy & Direction",
      session: "March 2020 - Present",
      institute: "ABCD Tech Ltd.",
      detail:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [active, setActive] = useState("Home");
  const [reload, setReload] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const fnActive = (id) => {
    // setActive(id);
    var elmntToView1 = document.getElementById("menu");
    elmntToView1.scrollIntoView({
      behavior: "smooth",
    });

    const yOffset = -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    if (id === "Contact") {
      setTimeout(() => {
        setActive(id);
      }, 1500);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastId = active;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log("scrollCheck", scrollCheck);
      let sectionId;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        // console.log("sectionTop", sectionTop, sectionTop-50);

        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          sectionId = section.getAttribute("id");
          if (lastId !== sectionId) {
            lastId = sectionId;
            setActive(sectionId);
            // console.log("sectionId", sectionId);
          }
        }
      });
    });

    // console.log("body", window.screen.availHeight);
  }, []);
  useEffect(() => {
    setReload(reload + 1);
    AOS.init({
      // offset: 200,
      duration: 1000,
      // anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <div
        className={classes.themeBackground}
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          position: "sticky ",
          top: 0,
          zIndex: 20,
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
          id="menu"
        >
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            className={classes.navbarStyle}
          >
            <Grid item xs={6} sm={3}>
              <Grid container alignItems="center">
                <Grid item>
                  {/* <img src={logo} alt="" height="40px" /> */}
                </Grid>
                <Grid item>
                  <p className={classes.BrandNameStyle}>NAYON</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={9} className={classes.ForOtherVersion}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Home" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Home")}
                >
                  <h4 className={`${classes.menuItem}`}>Home</h4>
                </Grid>
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Experties" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Experties")}
                >
                  <h4 className={`${classes.menuItem}`}>Experties</h4>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Experience" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Experience")}
                >
                  <p className={classes.menuItem}>Experience</p>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "My Works" ? classes.active : null
                  }`}
                  onClick={() => fnActive("My Works")}
                >
                  <p className={classes.menuItem}>My Works</p>
                </Grid>
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Education" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Education")}
                >
                  <p className={classes.menuItem}>Education</p>
                </Grid>
                <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Contact" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Contact")}
                >
                  <p className={classes.menuItem}>Contact</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={9} className={classes.ForMobileVersion}>
              <MenuIcon
                fontSize="large"
                onClick={() => setOpenDrawer(!openDrawer)}
                style={{ color: "#061A38" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.themeBackground}>
        <Container maxWidth="xl" className={classes.homeContainerStyle}>
          <section
            id="Home"
            className={`${classes.sectionPaddingRightLeft} ${classes.homeSectionStyle}`}
          >
            <div style={{ width: "100%" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                className={classes.nameBox}
              >
                <Grid item sm={12} md={8} className={classes.myInfoBox}>
                  {/* <Fade left cascade enter spy={reload}> */}
                  <div>
                    <p className={classes.h1}>My name is Nayon.</p>

                    <p className={classes.h1}>I am a React.js Developer.</p>

                    <br />
                    <br />
                    <div className={classes.designationStyle}>
                      <p className={classes.h3}>
                        Jr. Developer at ABCD Technologies Limited
                      </p>
                    </div>
                  </div>
                  {/* </Fade> */}
                </Grid>
                <Grid item sm={12} md={4} className={classes.myImageBox}>
                  {/* <Fade right spy={reload}> */}
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    className={classes.pictureHolder}
                  >
                    <div className={classes.pictureBox}>
                      <img src={nayon} alt="" width="100%" />
                    </div>
                  </Grid>
                  {/* </Fade> */}
                </Grid>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Fade bottom spy={reload}>
                  <Grid item>
                    <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                      Develop For
                    </p>
                    <p className={classes.h4}>Web Application</p>
                  </Grid>
                </Fade>
                <Fade bottom spy={reload}>
                  <Grid item style={{ textAlign: "right" }}>
                    <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                      Phone
                    </p>
                    <p className={classes.h4}>(+880) 01793 66 15 17</p>
                  </Grid>
                </Fade>
                <Fade bottom spy={reload}>
                  <Grid item style={{ textAlign: "right" }}>
                    <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                      Drop your Message
                    </p>
                    <p className={classes.h4}>mahnayon@gmail.com</p>
                  </Grid>
                </Fade>
              </Grid>
            </div>
          </section>
        </Container>
      </div>

      <Container
        maxWidth="xl"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <section id="Experties" className={classes.sectionPaddingWithoutBottom}>
          <p className={classes.h2}>My Experties</p>

          <Grid container>
            <Grid item sm={6}>
              {/* <Fade left spy={reload}> */}
              {/* <div className={classes.borderStyle1} data-aos="fade-down"> */}
              <div className={classes.borderStyle1}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Image1} alt="" width="100%" />
                  </div>
                  <p className={classes.cardTitle}> Strategy & Direction</p>
                  <p className={classes.cardDetail}>
                    {" "}
                    Understand First. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={classes.cardButton}>
                    Head of design at Calvino
                  </div>
                </div>
              </div>
              {/* </Fade> */}
            </Grid>

            <Grid item sm={6}>
              {/* <Fade right spy={reload}> */}
              {/* <div className={classes.borderStyle2} data-aos="fade-left"> */}
              <div className={classes.borderStyle2}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Image1} alt="" width="100%" />
                  </div>
                  <p className={classes.cardTitle}> Strategy & Direction</p>
                  <p className={classes.cardDetail}>
                    {" "}
                    Understand First. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={classes.cardButton}>
                    Head of design at Calvino
                  </div>
                </div>
              </div>
              {/* </Fade> */}
            </Grid>

            <Grid item sm={6}>
              {/* <Fade left spy={reload}> */}
              {/* <div className={classes.borderStyle3} data-aos="fade-up"> */}
              <div className={classes.borderStyle3}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Image1} alt="" width="100%" />
                  </div>
                  <p className={classes.cardTitle}> Strategy & Direction</p>
                  <p className={classes.cardDetail}>
                    {" "}
                    Understand First. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={classes.cardButton}>
                    Head of design at Calvino
                  </div>
                </div>
              </div>
              {/* </Fade> */}
            </Grid>

            <Grid item sm={6}>
              {/* <Fade right spy={reload}> */}
              {/* <div className={classes.borderStyle4} data-aos="fade-right"> */}
              <div className={classes.borderStyle4}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img src={Image1} alt="" width="100%" />
                  </div>
                  <p className={classes.cardTitle}> Strategy & Direction</p>
                  <p className={classes.cardDetail}>
                    {" "}
                    Understand First. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={classes.cardButton}>
                    Head of design at Calvino
                  </div>
                </div>
              </div>
              {/* </Fade> */}
            </Grid>
          </Grid>

          <div>
            <p className={classes.cardTitle}> Also I learnt</p>
            <WhatIKnow />
          </div>
        </section>
      </Container>

      <Container
        maxWidth="xl"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <section
          id="Experience"
          className={classes.sectionPaddingWithoutBottom}
        >
          <p className={classes.h2}>Experience</p>
          <div className={classes.experienceBox}>
            {experienceData.map((item, i) =>
              i % 2 === 0 ? (
                // <Fade enter left key={i} spy={reload}>
                // <div className={classes.cardBox} key={i} data-aos="fade-right">
                <div className={classes.cardBox} key={i}>
                  <div className={classes.card}>
                    <div className={classes.cardTitleBox}>
                      <Grid
                        container
                        alignItems="center"
                        style={{ marginBottom: 24 }}
                      >
                        <Grid item xs={6}>
                          <div className={classes.cardTitleMargin}>
                            <p
                              className={classes.h3}
                              style={{ fontWeight: 400 }}
                            >
                              {" "}
                              {item.designation}
                            </p>
                          </div>

                          <p
                            className={classes.cardDetail}
                            style={{ margin: 0 }}
                          >
                            {" "}
                            {item.duration}
                          </p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <p
                            className={classes.h5}
                            style={{ color: "#061A38" }}
                          >
                            <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                            {item.company}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                    <p className={classes.cardDetail}>{item.detail}</p>
                  </div>
                </div>
              ) : (
                // </Fade>
                // <Fade enter right key={i} spy={reload}>
                // <div className={classes.cardBox} key={i} data-aos="fade-left">
                <div className={classes.cardBox} key={i}>
                  <div className={classes.card}>
                    <div className={classes.cardTitleBox}>
                      <Grid
                        container
                        alignItems="center"
                        style={{ marginBottom: 24 }}
                      >
                        <Grid item xs={6}>
                          <div className={classes.cardTitleMargin}>
                            <p
                              className={classes.h3}
                              style={{ fontWeight: 400 }}
                            >
                              {" "}
                              {item.designation}
                            </p>
                          </div>

                          <p
                            className={classes.cardDetail}
                            style={{ margin: 0 }}
                          >
                            {" "}
                            {item.duration}
                          </p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <p
                            className={classes.h5}
                            style={{ color: "#061A38" }}
                          >
                            <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                            {item.company}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                    <p className={classes.cardDetail}>{item.detail}</p>
                  </div>
                </div>
                // </Fade>
              )
            )}
          </div>
        </section>
      </Container>

      <Container
        maxWidth="xl"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <section id="My Works" className={classes.sectionPaddingWithoutBottom}>
          <p className={classes.h2}>My Works</p>
          <div className={classes.NotCard}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                {/* <Pulse spy={reload}> */}
                {/* <div className={classes.workDivStyle} data-aos="zoom-in-up"> */}
                <div className={classes.workDivStyle}>
                  <div className={classes.workHoverDiv}>
                    <div className={classes.workHoverDivText}>
                      <p
                        className={classes.h5}
                        style={{ letterSpacing: "2px" }}
                      >
                        E-Commerce
                      </p>
                      <p className={classes.workCardText}>DailyShop247.com</p>
                    </div>
                  </div>
                  <img src={work1} alt="" height="100%" width="100%" />
                </div>
                {/* </Pulse> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Pulse spy={reload}> */}
                {/* <div className={classes.workDivStyle} data-aos="zoom-in-up"> */}
                <div className={classes.workDivStyle}>
                  <div className={classes.workHoverDiv}>
                    <div className={classes.workHoverDivText}>
                      <p
                        className={classes.h5}
                        style={{ letterSpacing: "2px" }}
                      >
                        E-Commerce
                      </p>
                      <p className={classes.workCardText}>DailyShop247.com</p>
                    </div>
                  </div>
                  <img src={work2} alt="" height="100%" width="100%" />
                </div>
                {/* </Pulse> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Pulse spy={reload}> */}
                {/* <div className={classes.workDivStyle} data-aos="zoom-in-up"> */}
                <div className={classes.workDivStyle}>
                  <div className={classes.workHoverDiv}>
                    <div className={classes.workHoverDivText}>
                      <p
                        className={classes.h5}
                        style={{ letterSpacing: "2px" }}
                      >
                        E-Commerce
                      </p>
                      <p className={classes.workCardText}>DailyShop247.com</p>
                    </div>
                  </div>
                  <img src={work3} alt="" height="100%" width="100%" />
                </div>
                {/* </Pulse> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Pulse spy={reload} > */}
                {/* <div className={classes.workDivStyle} data-aos="zoom-in-up"> */}
                <div className={classes.workDivStyle}>
                  <div className={classes.workHoverDiv}>
                    <div className={classes.workHoverDivText}>
                      <p
                        className={classes.h5}
                        style={{ letterSpacing: "2px" }}
                      >
                        E-Commerce
                      </p>
                      <p className={classes.workCardText}>DailyShop247.com</p>
                    </div>
                  </div>
                  <img src={work4} alt="" height="100%" width="100%" />
                </div>
                {/* </Pulse> */}
              </Grid>
            </Grid>
          </div>
        </section>
      </Container>

      <Container
        maxWidth="xl"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <section id="Education" className={classes.sectionPaddingWithoutBottom}>
          <p className={classes.h2}>Education</p>
          <div className={classes.experienceBox}>
            {educationData.map((item, i) =>
              i % 2 === 0 ? (
                // <Fade left key={i} spy={reload}>
                // <div className={classes.cardBox} key={i} data-aos="fade-right">
                <div className={classes.cardBox} key={i}>
                  <div className={classes.card}>
                    <div className={classes.cardTitleBox}>
                      <Grid
                        container
                        alignItems="center"
                        style={{ marginBottom: 24 }}
                      >
                        <Grid item xs={6}>
                          <div className={classes.cardTitleMargin}>
                            <p
                              className={classes.h3}
                              style={{ fontWeight: 400 }}
                            >
                              {" "}
                              {item.subject}
                            </p>
                          </div>
                          <p
                            className={classes.cardDetail}
                            style={{ margin: 0 }}
                          >
                            {" "}
                            {item.session}
                          </p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <p className={classes.h5}>
                            <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                            {item.institute}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                    <p className={classes.cardDetail}>{item.detail}</p>
                  </div>
                </div>
              ) : (
                // </Fade>
                // <Fade right key={i} spy={reload}>
                // <div className={classes.cardBox} key={i} data-aos="fade-left">
                <div className={classes.cardBox} key={i}>
                  <div className={classes.card}>
                    <div className={classes.cardTitleBox}>
                      <Grid
                        container
                        alignItems="center"
                        style={{ marginBottom: 24 }}
                      >
                        <Grid item xs={6}>
                          <div className={classes.cardTitleMargin}>
                            <p
                              className={classes.h3}
                              style={{ fontWeight: 400 }}
                            >
                              {" "}
                              {item.subject}
                            </p>
                          </div>
                          <p
                            className={classes.cardDetail}
                            style={{ margin: 0 }}
                          >
                            {" "}
                            {item.session}
                          </p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <p className={classes.h5}>
                            <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                            {item.institute}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                    <p className={classes.cardDetail}>{item.detail}</p>
                  </div>
                </div>
                // </Fade>
              )
            )}
          </div>
        </section>
      </Container>

      <div className={classes.themeBackground}>
        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <section id="Contact" className={classes.sectionPaddingAllSide}>
            <p className={classes.h2}>Contact Me</p>
            <div
              className={classes.NotCard}
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <Grid container alignItems="center">
                <Grid item xs={12} sm={6}>
                  <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                    11/A, 19/28, Dhaka, Bangladesh
                  </p>
                  <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                    mahnayon@gmail.com
                  </p>
                  <p className={`${classes.h5} ${classes.marginBottomStyle}`}>
                    (+880) 1793 66 15 17
                  </p>
                  <Grid container alignItems="center">
                    <div className={classes.iconDiv}>
                      <FacebookIcon className={classes.iconStyle} />
                    </div>
                    <div className={classes.iconDiv}>
                      <InstagramIcon className={classes.iconStyle} />
                    </div>
                    <div className={classes.iconDiv}>
                      <LinkedInIcon className={classes.iconStyle} />
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.contactButtonBox}>
                  {/* <Fade right> */}

                  {/* <div data-aos="zoom-in"> */}
                  <a
                    className={classes.button}
                    // href="https://drive.google.com/file/d/17vtjYpam6cbCyTaZYz1MmHedR3wJSYJp/view?usp=sharing"
                    // target="_blank"
                    href="/Nayon.pdf"
                    download
                  >
                    Download CV
                  </a>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

                  <a
                    className={classes.button2}
                    href="https://www.messenger.com/t/100032252721687"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    Let's Talk
                  </a>
                  {/* </div> */}
                  {/* </Fade> */}
                </Grid>
              </Grid>
            </div>
          </section>
        </Container>
      </div>

      <NavbarDrawer
        openDrawer={openDrawer}
        fnActive={fnActive}
        active={active}
      />
    </div>
  );
};

export default Home;
