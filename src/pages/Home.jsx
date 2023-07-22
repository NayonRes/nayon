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
import nayon from "../assets/images/me3.png";
import me from "../assets/images/me2.png";
import Image1 from "../assets/images/Image1.png";
import fbIcon from "../assets/images/fbIcon.png";
import logo from "../assets/images/logo4.png";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import NewrozImage from "../assets/images/NewrozImage.png";
import PaymentIntegration from "../assets/images/Payment-Integration.png";
import homeBackground from "../assets/images/homeBackground.png";
import CartSystem from "../assets/images/CartSystem.png";
import supportPanel from "../assets/images/supportPanel2.png";
import kindercubby from "../assets/images/kindercubby.png";
import kindercubbyAdmin from "../assets/images/kindercubbyAdmin.png";
import webDevelopment from "../assets/images/web-development.svg";
import skill from "../assets/images/skill.png";
import education from "../assets/images/education.png";
import agile from "../assets/images/agile.png";
import design from "../assets/images/design.png";
import appDevelopment from "../assets/images/appDevelopment.png";
import refactor from "../assets/images/refactor.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarDrawer from "./NavbarDrawer";
import WhatIKnow from "./WhatIKnow";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import StopIcon from "@mui/icons-material/Stop";
import TextTransition, { presets } from "react-text-transition";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AOS from "aos";
import "aos/dist/aos.css";
import Email from "./Email";
import LaunchIcon from "@mui/icons-material/Launch";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const useStyles = makeStyles((theme) => ({
  themeBackground: {
    // backgroundColor: "#1F2235",
    // background: "#2b2741",
    // boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    // backgroundImage: `url(${homeBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  homeContainerStyle: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  homeSectionStyle: {
    minHeight: "calc(100vh - 70px)",
    display: "flex !important",
    alignItems: "center",
    position: "relative",
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
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    margin: 0,

    color: "#E3E56D",
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   lineHeight: "65px",
  },
  designationStyle2: {
    fontSize: "50px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    margin: 0,
    lineHeight: "80px",
    color: "#222",
    [theme.breakpoints.down("xl")]: {
      fontSize: "40px",
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "35px",
      textAlign: "center",
    },
  },
  h1: {
    fontSize: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    margin: 0,
    lineHeight: "50px",
    color: "#E3E56D",
    [theme.breakpoints.down("xl")]: {
      fontSize: "30px",
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "35px",
      textAlign: "center",
    },
  },
  h2: {
    fontSize: "42px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    margin: "0px 0px 50px 0px",
    color: "#1F2235",
    position: "relative",
    textAlign: "center",

    "&:after": {
      content: "''",
      position: "absolute",
      top: 5,
      left: 0,
      width: "120px",
      height: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      // transform: "scale(0)",
      // background: "black",
      borderBottom: "3px solid #ff4a57",
    },
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px 80px 0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      margin: "0px 0px 25px 0px",
      "&:after": {
        width: "80px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      "&:after": {
        width: "50px",
      },
    },
  },
  h3: {
    fontSize: "24px",
    // fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#1F2235",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      // fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  myDetails: {
    // fontSize: "24px",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#1F2235",
    [theme.breakpoints.down("md")]: {
      // fontSize: "20px",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "center",
    },
  },
  h4: {
    fontSize: "26px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#1F2235",
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
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#1F2235",
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
  cardSubTitle: {
    fontSize: "18px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: 0,
    color: "#ff4a57",
    [theme.breakpoints.down("xl")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  workCard: {
    background: "#fff",
    minHeight: "220px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "150px",
    },
  },
  workCardImg: {
    width: "210px",
    height: "140px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    position: "absolute",
    left: "-20px",
    top: "calc(100% - 70px)",
    [theme.breakpoints.down("xl")]: {
      width: "280px",
      height: "180px",
      top: "calc(100% - 90px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "210px",
      height: "140px",
      top: "calc(100% - 70px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "80px",
      top: "calc(100% - 40px)",
    },
  },
  workCardImg2: {
    width: "210px",
    height: "140px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    position: "absolute",
    right: "-20px",
    top: "calc(100% - 70px)",
    [theme.breakpoints.down("xl")]: {
      width: "280px",
      height: "180px",
      top: "calc(100% - 90px)",
    },
  },
  workCardDetailSide: {
    padding: "25px 40px 25px 0px !important",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "10px !important",
    },
  },
  workCardDetailSide2: {
    padding: "25px 0px 25px 40px !important",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px !important",
    },
  },
  workCardText: {
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
    color: "#1F2235",
    margin: "10px 0 0 0",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      margin: "5px 0 0 0",
    },
  },
  pictureHolder: {
    background: "transparent",
    border: "2px solid #1F2235",
    width: "350px !important",
    height: "350px",
    margin: "auto",
    borderRadius: "50%",
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
  imageHolder: {
    height: "calc(100vh - 80px)",
    zIndex: 10,
    position: "relative",
    
    "&:before": {
      content: "''",
      position: "absolute",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      background: "rgba(174, 214, 241,.3)",
      zIndex: -1,
    },
  },
  pictureBox: {
    width: "320px",
    height: "320px",
    overflow: "hidden",
    borderRadius: "50%",
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
    // "&:hover": {
    //   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // },
    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },
  },
  cardHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px",
    gap: "30px",
    margin: "60px 0",
    flexWrap: "wrap",
    [theme.breakpoints.down("xl")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "60px 30px",
    },
  },
  card3: {
    padding: "40px 30px",
    boxSizing: "border-box",
    display: "flex",
    position: "relative",
    gap: "20px",
    flex: "0 0 calc(50% - 15px)",
    border: " 1px solid #ddd",
    transition: "0.3s",
    // "&:hover div": {
    //   background: "#ff4a57",
    // },
    "&:hover $cardImage": {
      transition: "0.3s",
      background: "#ff4a57",
    },
    "&:hover $svg": {
      transition: "0.3s",
      fill: "#fff",
    },
    [theme.breakpoints.down("xl")]: {
      flex: "0 0 calc(50% - 7.5px)",
    },
    [theme.breakpoints.down("sm")]: {
      flex: "0 0 100%",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "0 0 100%",
    },
  },
  cardImage: {
    width: "60px",
    height: "60px",
    margin: "auto",
    boxSizing: "border-box",
    padding: "15px",
    border: "1px solid #ff4a57",
    // transition: "0.5s",
    // "&:hover": {
    //   background: " #ff4a57",
    // },
    // "&:hover svg": {
    //   fill: " #ffff",
    // },
    // [theme.breakpoints.down("xl")]: {
    //   maxWidth: "85px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   maxWidth: "50px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "40px",
    // },
  },
  cardTitle: {
    fontSize: "20px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    margin: "30px 0px 16px",
    color: "#1F2235",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      margin: "10px 0px",
    },
  },
  cardTitle2: {
    fontSize: "24px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    margin: "50px 0px",
    color: "#1F2235",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      margin: "10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  cardDetail: {
    fontSize: "15px",
    marginTop: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    margin: "0px 0px 24px 0px",
    color: "#1F2235",
    textAlign: "center",
    // color: "#1F2235",
    lineHeight: 2,
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
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#ff4a57",
    cursor: "pointer",
    padding: "0px 0px 8px 0px",
    display: "inline-block",
    // borderBottom: "2px solid #ff4a57",
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
    // display: "none",
    height: "70px",
    // background: "#1F2235",
    background: "rgba(0,0,0,0)",
    // borderRadius: "16px 16px 0px 0px",

    bottom: 0,
    // boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuItem: {
    fontSize: "18px",
    // fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#1F2235",
    // color: "#1F2235",
    position: "relative",
    padding: "5px 20px",
    zIndex: 2,

    "&:hover": {
      color: "#ff4a57",
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

  menuItemDarkMoodColor: {
    color: "#ff4a57",

    "&:hover": {
      color: "#1F2235",
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
    fontFamily: "'Poppins', sans-serif !important",
    fontWeight: "600 !important",
  },
  iconButtonStyle2: {
    color: "#666E7A !important",
    border: "1px solid #E5E5E5 !important",
    borderRadius: "25px !important",
    fontSize: "13px !important",
    fontFamily: "'Poppins', sans-serif !important",
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
    // borderLeft: "2px  solid #ff4a57",
    // borderRight: "2px  solid #ff4a57",
    // borderRadius: "10px",
    color: "#ff4a57",
  },
  darkModeActive: {
    color: "#1F2235",
  },

  buttonStyle: {
    padding: "5px 16px 4px 16px !important",
    borderRadius: "50px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "3px 9px 2px 9px !important",
      fontSize: "8px !important",
      "& svg": {
        fontSize: "12px !important",
      },
    },
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
    // borderBottom: "1px solid #E5E7E9",
  },
  workDivStyle: {
    height: "450px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
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
    background: "#061A3820",
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
    // width: "250px",
    // background: "#fff",
    [theme.breakpoints.down("sm")]: {
      left: "10px",
      bottom: "10px",
    },
  },
  button: {
    border: "1px solid #ff4a57",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Poppins', sans-serif",
    textDecoration: "none",
    color: "#ff4a57",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      background: "#E3E56D50",
    },
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 15px",
      marginRight: "0px",
    },
  },
  button2: {
    border: "1px solid #ff4a57",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "26px",
    fontFamily: "'Poppins', sans-serif",
    color: "#1F2235",
    cursor: "pointer",
    background: "#ff4a57",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      padding: "10px 25px",
    },
  },
  iconDiv: {
    width: "40px",
    height: "40px",
    border: "1px solid #ff4a57",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    cursor: "pointer",
    transition: ".5s !important",
    "&:hover": {
      background: "#ff4a57",
    },
    "&:hover svg": {
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  iconStyle: {
    color: "#ff4a57",
    fontSize: "25px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
    },
    // transition: ".5s !important",
    // "&:hover": {
    //   transform: "scaleX(-1)",
    // },
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
      padding: "0 115px",
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
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "0px",
    // },
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
  // designationStyle: {
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  cardTitleMargin: {
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8px",
    },
  },
  contactButtonBox: {
    // minHeight: "1000px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginTop: "20px !important",
    },
  },
  borderStyle1: {
    borderRight: "1px solid #E3E56D",
    borderBottom: "1px solid #E3E56D",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle2: {
    borderBottom: "1px solid #E3E56D",
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #E3E56D",
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle3: {
    borderRight: "1px solid #E3E56D",

    [theme.breakpoints.down("sm")]: {
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      borderBottom: "1px solid #E3E56D",
      marginBottom: "10px !important",
      borderRadius: "10px",
    },
  },
  borderStyle4: {
    [theme.breakpoints.down("sm")]: {
      borderRight: "1px solid #E3E56D",
      borderLeft: "1px solid #E3E56D",
      borderTop: "1px solid #E3E56D",
      borderBottom: "1px solid #E3E56D",
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
  // gridMargin: {
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: 50,
  //   },
  // },
  listIcon: {
    // color: "#fff",
    fontSize: "18px !important",
    marginRight: "5px",
    // background: "#1F2235",
    color: "#1F2235",
    border: "1px solid #1F2235",
    // padding: "1px",
    borderRadius: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "6px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6px !important",
    },
  },
  homeInfoBox: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "70px",
    },
  },
  experienceBox: {
    backgroundImage: `url(${skill})`,
    backgroundSize: "300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "0px",
    },
  },
  educationBox: {
    backgroundImage: `url(${education})`,
    backgroundSize: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    // marginRight: "200px !important",
    [theme.breakpoints.down("xl")]: {
      backgroundImage: "none",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "0px",
    },
  },
  linkIconStyle: {
    fontSize: "18px",
    position: "relative",
    top: 3,
  },
}));

const Home = () => {
  const classes = useStyles();
  const experienceData = [
    {
      designation: "Frontend Developer (React Js)",
      duration: "May 2021 - Present",
      company: "Newroz Technologies Limited.",
      detail: [
        "Developed and Maintaining 4 new projects (Daycare Website,API Integration Website, Daycare Website Admin Panel, Financial Admin Panel)",
        "Refactored 2 projects completely with new efficient architecture (Company Website, Support Panel).",
        "Developing and Maintaining Marketing Panel and Commission panel with new efficient architecture.",
        "Collaborating with the other developers and the testing team.",
        "Experience with creating React App design from a Adobe XD & Figma",
        "Creating reusable code and infrastructure for future use.",
        "Agile processes (Scrum & Kanban)",
      ],

      // "Mentoring, Maintain quality and ensure responsiveness of applications.",
    },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   designation: "Strategy & Direction",
    //   duration: "March 2020 - Present",
    //   company: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];
  const educationData = [
    {
      subject: "Professional Diploma in IT",
      session: "March 2020 - Present",
      institute: "IsDB-BISEW IT Scholarship",
      detail: [
        "Computer Fundamentals (120 hours)",
        "Design and implement databases with MS SQL Server 2016 (104 hours)",
        "Programming with C# and .Net 4.6.1 (136 hours)",
        "UML using MS Visio and MS Visual Studio (80 hours)",
        "Programming in HTML5 with JavaScript & CSS3 (128 hours)",
        "Introduction to XML, Desktop application using C#, Crystal Report (60 hours)",
        "Web Application Development with ASP.NET Web Form (80 hours)",
        "Developing ASP.NET MVC 5 and ASP.NET Core (168 hours)",
        "Web Application Development with Angular and AngularJS (92 hours)",
        "Developing Web APIs, Web Services, SignalR (92 hours)",
      ],
    },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   subject: "Strategy & Direction",
    //   session: "March 2020 - Present",
    //   institute: "ABCD Tech Ltd.",
    //   detail:
    //     "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];
  const [darkMode, setDarkMode] = useState(false);
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
    // ==================================================
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const navbarPosition = document.getElementById("navbar");
      let y = navbarPosition.offsetTop;
      if (y < 80) {
        navbarPosition.style.background = "rgba(0,0,0,0)";
        navbarPosition.style.backdropFilter = "blur(0px)";
        // box-shadow: 0 10px 15px rgba(25,25,25,0.1);
      } else if (y > 80) {
        navbarPosition.style.background = "rgba(247, 249, 249, 0.5)";
        navbarPosition.style.backdropFilter = "blur(5px)";
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  const TEXTS = ["React.js Developer.", "Web Designer", "Frontend Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div style={{ background: darkMode && "#1F2235" }}>
      <div
        id="navbar"
        className={classes.themeBackground}
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          position: "sticky",
          transition: "0.3s",
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
            id="navbar"
          >
            <Grid item xs={6} sm={3}>
              <Grid container alignItems="center">
                <Grid item>
                  {/* <img src={logo} alt="" height="40px" /> */}
                </Grid>
                <Grid item onClick={() => fnActive("Home")}>
                  <p
                    className={classes.BrandNameStyle}
                    style={{ color: "#ff4a57" }}
                  >
                    NAYON
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={9} className={classes.ForOtherVersion}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid
                  item
                  className={`${classes.itemStyle}`}
                  onClick={() => fnActive("Home")}
                >
                  <h4
                    className={`${classes.menuItem}  ${
                      active === "Home"
                        ? darkMode
                          ? classes.darkModeActive
                          : classes.active
                        : null
                    } ${darkMode && classes.menuItemDarkMoodColor}`}
                  >
                    Home
                  </h4>
                </Grid>
                {/* <Grid
                  item
                  className={`${classes.itemStyle} ${
                    active === "Experties" ? classes.active : null
                  }`}
                  onClick={() => fnActive("Experties")}
                >
                  <h4 className={`${classes.menuItem}`}>Experties</h4>
                </Grid> */}

                <Grid
                  item
                  className={`${classes.itemStyle}`}
                  onClick={() => fnActive("Experience")}
                >
                  <p
                    className={`${classes.menuItem}  ${
                      active === "Experience"
                        ? darkMode
                          ? classes.darkModeActive
                          : classes.active
                        : null
                    }  ${darkMode && classes.menuItemDarkMoodColor}`}
                  >
                    Experience
                  </p>
                </Grid>

                <Grid
                  item
                  className={`${classes.itemStyle} `}
                  onClick={() => fnActive("My Works")}
                >
                  <p
                    className={`${classes.menuItem}  ${
                      active === "My Works"
                        ? darkMode
                          ? classes.darkModeActive
                          : classes.active
                        : null
                    }  ${darkMode && classes.menuItemDarkMoodColor}`}
                  >
                    My Works
                  </p>
                </Grid>
                <Grid
                  item
                  className={`${classes.itemStyle}`}
                  onClick={() => fnActive("Education")}
                >
                  <p
                    className={`${classes.menuItem}  ${
                      active === "Education"
                        ? darkMode
                          ? classes.darkModeActive
                          : classes.active
                        : null
                    }  ${darkMode && classes.menuItemDarkMoodColor}`}
                  >
                    Education
                  </p>
                </Grid>
                <Grid
                  item
                  className={`${classes.itemStyle}`}
                  onClick={() => fnActive("Contact")}
                >
                  <p
                    className={`${classes.menuItem}  ${
                      active === "Contact"
                        ? darkMode
                          ? classes.darkModeActive
                          : classes.active
                        : null
                    }  ${darkMode && classes.menuItemDarkMoodColor}`}
                  >
                    Contact
                  </p>
                </Grid>
                <Grid item className={`${classes.itemStyle}`}>
                  <IconButton
                    disableElevation
                    style={{ background: "#ff4a57" }}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? (
                      <LightModeOutlinedIcon
                        style={{ fontSize: "16px", color: "#fff" }}
                      />
                    ) : (
                      <Brightness4OutlinedIcon
                        style={{ fontSize: "16px", color: "#fff" }}
                      />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={9} className={classes.ForMobileVersion}>
              <MenuIcon
                fontSize="large"
                onClick={() => setOpenDrawer(!openDrawer)}
                style={{ color: "#ff4a57" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ overflowX: "hidden" }}>
        <div className={classes.themeBackground}>
          <Container maxWidth="xl" className={classes.homeContainerStyle}>
            <section
              id="Home"
              className={`${classes.sectionPaddingRightLeft} ${classes.homeSectionStyle}`}
            >
              <div className={classes.homeInfoBox}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  // className={classes.nameBox}
                >
                  <Grid item sm={12} md={6} className={classes.myInfoBox}>
                    {/* <Fade left cascade enter spy={reload}> */}
                    <div>
                      <p className={classes.h1} style={{ color: "#ff4a57" }}>
                        Welcome!
                        {/* <span style={{ color: "cadetblue" }}>
                          {" "}
                          Nayon Hossain.
                        </span> */}
                      </p>

                      <p
                        className={classes.designationStyle2}
                        style={{ color: darkMode && "#fff" }}
                      >
                        I am{" "}
                        <TextTransition
                          text={TEXTS[index % TEXTS.length]}
                          springConfig={presets.wobbly}
                          inline={true}
                          noOverflow={true}
                          // delay={3000}
                        />
                      </p>

                      <br />

                      <div className={classes.designationStyle}>
                        <p
                          className={classes.myDetails}
                          style={{ color: darkMode && "#fff" }}
                        >
                          I'm a Frontend Developer with extensive experience for
                          over 2 years. My expertise is to desing & developed
                          web applications using React Js.
                        </p>
                      </div>
                      <br />
                      <br />
                      <Grid
                        container
                        alignItems="center"
                        sx={{ justifyContent: { xs: "center", md: "center" } }}
                      >
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
                    </div>
                    {/* </Fade> */}
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={6}
                    className={` ${classes.ForOtherVersion}`}
                  >
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      // className={classes.pictureHolder}
                    >
                      <div className={classes.imageHolder}>
                        <img src={me} alt="" height="100%" />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={6}
                    className={`${classes.myImageBox} ${classes.ForMobileVersion}`}
                  >
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
                  </Grid>
                </Grid>

                {/* <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  className={classes.gridMargin}
                >
                  <Fade delay={1500} bottom spy={reload}>
                    <Grid item>
                      <p
                        className={`${classes.h5} ${classes.marginBottomStyle}`}
                        style={{ color: "#819a9b" }}
                      >
                        Develop For
                      </p>
                      <p className={classes.h4} style={{ color: "#ff4a57" }}>
                        Web Application
                      </p>
                    </Grid>
                  </Fade>
                  <Fade delay={1000} bottom spy={reload}>
                    <Grid item style={{ textAlign: "right" }}>
                      <p
                        className={`${classes.h5} ${classes.marginBottomStyle}`}
                        style={{ color: "#819a9b" }}
                      >
                        Phone
                      </p>
                      <p className={classes.h4} style={{ color: "#ff4a57" }}>
                        (+880) 01793 66 15 17
                      </p>
                    </Grid>
                  </Fade>
                  <Fade delay={500} bottom spy={reload}>
                    <Grid item style={{ textAlign: "right" }}>
                      <p
                        className={`${classes.h5} ${classes.marginBottomStyle}`}
                        style={{ color: "#819a9b" }}
                      >
                        Drop your Message
                      </p>
                      <p className={classes.h4} style={{ color: "#ff4a57" }}>
                        mahnayon@gmail.com
                      </p>
                    </Grid>
                  </Fade>
                </Grid> */}
              </div>
            </section>
          </Container>
        </div>
        {/* <div
          style={{
            background: "rgba(229, 231, 233, 0.3)",
            marginTop: "60px",
            paddingBottom: "60px",
          }}
        > */}
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
            <p className={classes.h2} style={{ color: darkMode && "#fff" }}>
              My <span style={{ color: "#ff4a57" }}>Experience</span>
            </p>
            <div className={classes.cardHolder}>
              <div
                className={classes.card3}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className={classes.cardImage}>
                    <svg
                      fill="#ff4a57"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 419.931 419.931"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z" />{" "}
                              <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327 c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336 c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z" />{" "}
                              <g>
                                {" "}
                                <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z" />{" "}
                                <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z" />{" "}
                                <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z" />{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p
                      className={classes.cardTitle}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Developed and Maintaining
                    </p>

                    <p
                      className={classes.cardDetail}
                      style={{ color: darkMode && "#fff" }}
                    >
                      {" "}
                      4 new projects (Daycare Website,API Integration Website,
                      Daycare Website Admin Panel, Financial Admin Panel).
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.card3}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <div className={classes.cardImage}>
                    <svg
                      fill="#ff4a57"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 490 490"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M245,314.021c-5.936,0-10.743,4.813-10.743,10.749s4.808,10.751,10.743,10.751c5.938,0,10.75-4.815,10.75-10.751 S250.938,314.021,245,314.021z"></path>{" "}
                          <path d="M480,21.003H10c-5.523,0-10,4.477-10,10v327.456c0,5.522,4.477,10,10,10h174.711l-17.492,42.43h-32.88 c-5.522,0-10,4.478-10,10v38.108c0,5.523,4.478,10,10,10h221.323c5.522,0,10-4.477,10-10v-38.108c0-5.522-4.478-10-10-10h-32.879 l-17.493-42.43H480c5.522,0,10-4.478,10-10V31.003C490,25.479,485.522,21.003,480,21.003z M470,41.003v240.901H20V41.003H470z M345.662,448.997H144.339v-18.108h201.323V448.997z M301.149,410.889H188.852l17.492-42.43h77.312L301.149,410.889z M20,348.459 v-46.555h450v46.555H20z"></path>{" "}
                          <path d="M323.206,161.089L323.206,161.089L323.206,161.089c0-5.522-4.478-10-10.001-9.999l-10.664,0.001 c-0.603-3.473-1.497-6.846-2.686-10.08l9.221-5.324c4.782-2.763,6.421-8.879,3.658-13.661c-2.763-4.782-8.877-6.423-13.66-3.659 l-9.248,5.342c-2.233-2.669-4.699-5.135-7.368-7.369l5.342-9.247c2.763-4.782,1.125-10.899-3.657-13.661 c-4.782-2.764-10.898-1.125-13.661,3.657l-5.325,9.22c-3.234-1.189-6.607-2.084-10.08-2.688V92.962c0-5.523-4.477-10-10-10 c-0.025,0-0.051,0.004-0.076,0.004s-0.051-0.004-0.076-0.004c-5.522,0-10,4.477-10,10v10.658c-3.473,0.604-6.846,1.498-10.08,2.688 l-5.325-9.22c-2.763-4.782-8.879-6.421-13.661-3.657c-4.782,2.762-6.42,8.879-3.657,13.661l5.342,9.247 c-2.669,2.234-5.135,4.7-7.368,7.369l-9.248-5.342c-4.783-2.764-10.897-1.123-13.66,3.659c-2.763,4.782-1.124,10.898,3.658,13.661 l9.221,5.324c-1.189,3.234-2.083,6.607-2.686,10.08l-10.664-0.001c-5.523-0.001-10.001,4.477-10.001,9.999l0,0l0,0l0,0l0,0 c0,5.523,4.478,10,10.001,10l10.664-0.001c0.602,3.472,1.497,6.845,2.686,10.079l-9.221,5.325 c-4.782,2.763-6.421,8.878-3.658,13.661c2.763,4.781,8.877,6.422,13.66,3.658l9.248-5.342c2.233,2.67,4.699,5.136,7.368,7.369 l-5.342,9.248c-2.763,4.782-1.125,10.898,3.657,13.66c4.782,2.764,10.898,1.125,13.661-3.656l5.325-9.221 c3.234,1.189,6.607,2.085,10.08,2.688v10.658c0,5.523,4.478,10,10,10c0.025,0,0.051-0.004,0.076-0.004s0.051,0.004,0.076,0.004 c5.523,0,10-4.477,10-10v-10.658c3.473-0.603,6.846-1.498,10.08-2.688l5.325,9.221c2.763,4.781,8.879,6.42,13.661,3.656 c4.782-2.762,6.42-8.878,3.657-13.66l-5.342-9.248c2.669-2.233,5.135-4.699,7.368-7.369l9.248,5.342 c4.783,2.764,10.898,1.123,13.66-3.658c2.763-4.783,1.124-10.898-3.658-13.661l-9.221-5.325c1.189-3.234,2.083-6.607,2.686-10.079 l10.664,0.001C318.728,171.089,323.206,166.612,323.206,161.089L323.206,161.089L323.206,161.089z M245.076,199.433 c-0.025,0-0.051-0.002-0.076-0.002s-0.051,0.002-0.076,0.002c-21.141,0-38.34-17.2-38.34-38.344 c0-21.143,17.199-38.344,38.34-38.344c0.025,0,0.051,0.002,0.076,0.002s0.051-0.002,0.076-0.002 c21.141,0,38.34,17.201,38.34,38.344C283.416,182.232,266.217,199.433,245.076,199.433z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p
                      className={classes.cardTitle}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Refactored and Maintaining
                    </p>

                    <p
                      className={classes.cardDetail}
                      style={{ color: darkMode && "#fff" }}
                    >
                      {" "}
                      2 projects completely with new efficient architecture
                      (Company Website, Support Panel).
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.card3}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <div className={classes.cardImage}>
                    <svg
                      fill="#ff4a57"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 511.996 511.996"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M244.606,137.494c-26.153,0-47.432,21.278-47.432,47.431c0,26.153,21.278,47.432,47.432,47.432 c26.154,0,47.431-21.278,47.431-47.432C292.036,158.77,270.759,137.494,244.606,137.494z M244.606,214.877 c-16.515,0-29.953-13.437-29.953-29.953c0-16.516,13.437-29.952,29.953-29.952c16.515,0,29.952,13.437,29.952,29.952 C274.557,201.44,261.12,214.877,244.606,214.877z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M452.072,123.043c-17.141,0-31.087,13.946-31.087,31.087c0,17.141,13.946,31.087,31.087,31.087 s31.087-13.946,31.087-31.087C483.158,136.989,469.212,123.043,452.072,123.043z M452.072,167.738 c-7.503,0-13.608-6.105-13.608-13.608s6.104-13.608,13.608-13.608s13.608,6.105,13.608,13.608 C465.679,161.634,459.575,167.738,452.072,167.738z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M476.794,39.399l-127.09-0.005c-19.411,0-35.203,15.797-35.203,35.214v40.122h-52.404c-0.012,0-0.022-0.001-0.034-0.001 H71.242c-0.022,0-0.044,0.001-0.068,0.001H37.35C16.755,114.73,0,131.486,0,152.08v224.414c0,20.595,16.755,37.35,37.35,37.35 h133.817l-11.799,47.928c-0.01,0.041-0.014,0.083-0.023,0.124c-0.048,0.21-0.086,0.423-0.119,0.639 c-0.016,0.104-0.035,0.207-0.048,0.312c-0.024,0.207-0.035,0.418-0.044,0.632c-0.005,0.107-0.015,0.216-0.016,0.324 c0,0.021-0.003,0.041-0.003,0.061c0,0.261,0.016,0.519,0.038,0.774c0.003,0.033,0.001,0.066,0.005,0.099 c0.031,0.32,0.083,0.636,0.148,0.946c0.008,0.04,0.021,0.078,0.03,0.119c0.061,0.267,0.132,0.53,0.216,0.787 c0.024,0.073,0.054,0.146,0.08,0.219c0.079,0.22,0.164,0.437,0.26,0.649c0.04,0.087,0.083,0.174,0.126,0.26 c0.096,0.193,0.197,0.383,0.305,0.568c0.054,0.091,0.107,0.181,0.164,0.27c0.114,0.179,0.237,0.352,0.364,0.522 c0.043,0.058,0.079,0.121,0.125,0.179c0.02,0.024,0.043,0.047,0.063,0.071c0.154,0.192,0.317,0.374,0.486,0.552 c0.045,0.048,0.086,0.099,0.133,0.146c0.217,0.218,0.444,0.423,0.683,0.616c0.063,0.051,0.129,0.096,0.193,0.146 c0.182,0.14,0.367,0.275,0.559,0.401c0.083,0.054,0.169,0.103,0.254,0.154c0.183,0.111,0.369,0.217,0.562,0.313 c0.089,0.045,0.178,0.087,0.268,0.129c0.197,0.092,0.396,0.175,0.601,0.252c0.09,0.034,0.179,0.068,0.269,0.099 c0.212,0.072,0.428,0.133,0.646,0.189c0.089,0.023,0.175,0.049,0.263,0.068c0.231,0.051,0.465,0.09,0.703,0.121 c0.079,0.01,0.157,0.027,0.238,0.036c0.315,0.034,0.634,0.055,0.957,0.055h105.359h69.171c4.828,0,8.74-3.913,8.74-8.74 c0-4.826-3.912-8.739-8.74-8.739h-58.021l10.161-41.278l152.849-0.005c18.427,0,33.42-14.986,33.42-33.408v-75.6 c17.535-1.994,31.204-16.913,31.204-34.972V74.605C512,55.191,496.206,39.399,476.794,39.399z M359.942,74.605 c0-9.774,7.952-17.726,17.727-17.726h99.125c9.775-0.001,17.727,7.951,17.727,17.726v10.303H359.942V74.605z M359.941,102.385 H494.52v138.593h-4.179l-43.979-48.396c-1.657-1.822-4.006-2.862-6.468-2.862s-4.811,1.039-6.468,2.862l-12.486,13.738 l-31.006-34.107c-1.656-1.821-4.005-2.861-6.467-2.861c-2.461,0-4.81,1.039-6.466,2.862l-17.059,18.768V102.385z M466.723,240.978 h-14.276l-19.695-21.664l7.142-7.859L466.723,240.978z M359.943,216.271l0.347,0.315l23.179-25.501l45.358,49.893h-68.884V216.271 z M331.98,74.609c0-8.911,6.609-16.288,15.175-17.53c-2.978,5.166-4.693,11.147-4.693,17.527V269.86 c0,6.375,1.712,12.355,4.688,17.518c-8.564-1.245-15.171-8.615-15.171-17.518V74.609z M55.301,311.432l70.306-72.26 l93.467,102.804H55.301V311.432z M202.523,297.776l20.999-23.107l61.163,67.305h-41.991v0.001L202.523,297.776z M41.875,396.364 H37.35c-10.957,0.001-19.871-8.913-19.871-19.87V152.08c0-10.957,8.914-19.871,19.871-19.871h4.525 c-2.583,4.74-4.053,10.172-4.053,15.938V380.43C37.822,386.196,39.291,391.625,41.875,396.364z M266.364,455.122h-87.358 l10.161-41.278h87.358L266.364,455.122z M463.317,380.432c0,8.783-7.151,15.929-15.941,15.929H71.242 c-8.79,0-15.941-7.145-15.941-15.929v-20.977h408.016V380.432z M463.317,341.976H308.303l-78.312-86.178 c-1.657-1.822-4.005-2.862-6.468-2.862c-2.462,0-4.811,1.039-6.467,2.862l-26.344,28.987l-58.423-64.245 c-1.622-1.783-3.908-2.818-6.318-2.858c-2.434-0.008-4.731,0.916-6.411,2.644l-64.258,66.043V148.148 c0-8.778,7.133-15.92,15.907-15.938h243.293V269.86c0,19.41,15.792,35.202,35.203,35.202l113.613,0.003V341.976z M494.521,269.859 c0,9.775-7.952,17.727-17.727,17.727l-99.193-0.003c-9.744-0.037-17.66-7.972-17.66-17.724v-11.402h134.579V269.859z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p
                      className={classes.cardTitle}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Adobe XD & Figma
                    </p>

                    <p
                      className={classes.cardDetail}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Experience with creating React Application using Adobe XD
                      & Figma design.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classes.card3}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div>
                  <div className={classes.cardImage}>
                    <svg
                      fill="#ff4a57"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M815 576h145c35 0 64 29 64 64v320c0 35-29 64-64 64H640c-35 0-64-29-64-64V640c0-35 29-64 64-64h113v-38H270v38h114c35 0 64 29 64 64v320c0 35-29 64-64 64H64c-35 0-64-29-64-64V640c0-35 29-64 64-64h144v-60c0-22 28-33 53-33h220v-36H343c-35 0-64-29-64-64V63c0-35 29-64 64-64h320c35 0 64 29 64 64v320c0 35-29 64-64 64H545v37c83 0 134-1 217-1 25 0 53 10 53 33v60zm145 64H640v320h320V640zM663 63H343v320h320V63zM384 640H64v320h320V640z"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p
                      className={classes.cardTitle}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Agile processes
                    </p>

                    <p
                      className={classes.cardDetail}
                      style={{ color: darkMode && "#fff" }}
                    >
                      Experience with Scrum and Kanban frameworks of Agile
                      software development to manage and organize work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p
                className={classes.cardTitle2}
                style={{ color: darkMode && "#fff" }}
              >
                {" "}
                Tools & Technologies
              </p>
              <WhatIKnow />
            </div>
          </section>
        </Container>
        {/* </div> */}
        {/* <div
          style={{
            background: "rgba(229, 231, 233, 0.3)",
            marginTop: "60px",
            paddingBottom: "60px",
          }}
        > */}
        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <section
            id="My Works"
            className={classes.sectionPaddingWithoutBottom}
          >
            <p className={classes.h2} style={{ color: darkMode && "#fff" }}>
              My <span style={{ color: "#ff4a57" }}>Works</span>
            </p>
            <div className={classes.NotCard}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={NewrozImage}
                        alt=""
                        className={classes.workCardImg}
                        data-aos="fade-right"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                    <Grid item xs={8} className={classes.workCardDetailSide}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          Newroz Technologies Limited
                        </p>
                      </div>

                      <p
                        className={`${classes.cardDetail}`}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Adobe XD to React js
                      </p>

                      {/* <a
                          href="https://www.newroztech.com/"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                          className={classes.cardButton}
                        >
                          <LaunchIcon className={classes.linkIconStyle} /> Take
                          a look
                        </a> */}
                      <a
                        href="https://www.newroztech.com/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          disableElevation
                          startIcon={<LanguageIcon />}
                          className={classes.buttonStyle}
                        >
                          Take a look
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={8} className={classes.workCardDetailSide2}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          Payment Integration API
                        </p>
                      </div>
                      <p
                        className={classes.cardDetail}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Own Design
                      </p>

                      <a
                        href="https://developer.fast-pay.iq"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          disableElevation
                          startIcon={<LanguageIcon />}
                          className={classes.buttonStyle}
                        >
                          Take a look
                        </Button>
                      </a>
                    </Grid>
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={PaymentIntegration}
                        alt=""
                        className={classes.workCardImg}
                        style={{ right: "-20px", left: "auto" }}
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={kindercubby}
                        alt=""
                        className={classes.workCardImg}
                        data-aos="fade-right"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                    <Grid item xs={8} className={classes.workCardDetailSide}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          Kinder Cubby
                        </p>
                      </div>
                      <p
                        className={classes.cardDetail}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Figma to React js
                      </p>
                      <a
                        href="https://www.kindercubby.com/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          disableElevation
                          startIcon={<LanguageIcon />}
                          className={classes.buttonStyle}
                        >
                          Take a look
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={8} className={classes.workCardDetailSide2}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          E-Commerce Cart System
                        </p>
                      </div>
                      <p
                        className={classes.cardDetail}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Own Design
                      </p>
                      <a
                        href="https://fastpay-ecom.netlify.app/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          disableElevation
                          startIcon={<LanguageIcon size="large" />}
                          className={classes.buttonStyle}
                        >
                          Take a look
                        </Button>
                      </a>
                    </Grid>
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={CartSystem}
                        alt=""
                        className={classes.workCardImg}
                        style={{ right: "-20px", left: "auto" }}
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={kindercubbyAdmin}
                        alt=""
                        className={classes.workCardImg}
                        data-aos="fade-right"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                    <Grid item xs={8} className={classes.workCardDetailSide}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          Admin Panel (Kinder Cubby)
                        </p>
                      </div>
                      <p
                        className={`${classes.cardDetail}`}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Own Design
                      </p>
                      {/* <a
                        href="https://fastpay-ecom.netlify.app/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="secondary"
                          variant="outlined"
                          disableElevation
                          size="small"
                        >
                          Take a look
                        </Button>
                      </a> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                  <Grid
                    className={classes.workCard}
                    container
                    alignItems="center"
                    data-aos="fade-zoom-in"
                  >
                    <Grid item xs={8} className={classes.workCardDetailSide2}>
                      <div className={classes.cardTitleMargin}>
                        <p className={classes.h3} style={{ fontWeight: 400 }}>
                          {" "}
                          Support Panel (FastPay)
                        </p>
                      </div>
                      <p
                        className={`${classes.cardDetail}`}
                        style={{ marginBottom: "5px", textAlign: "left" }}
                      >
                        <b>Frontend Technologies :</b> HTML 5, CSS 3,
                        Material-UI, JavaScript,React Js, React Hooks,React
                        Context API,RESTful APIs.
                      </p>
                      <p
                        className={`${classes.cardDetail} ${classes.cardTitleMargin}`}
                        style={{ textAlign: "left" }}
                      >
                        <b>Desinged :</b> Own Design
                      </p>
                      {/* <a
                    href="https://www.newroztech.com/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      color="secondary"
                      variant="contained"
                      disableElevation
                    >
                      Take a look
                    </Button>
                  </a> */}
                    </Grid>
                    <Grid item xs={4} style={{ position: "relative" }}>
                      <img
                        src={supportPanel}
                        alt=""
                        className={classes.workCardImg}
                        style={{ right: "-20px", left: "auto" }}
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-easing="ease-in-sine"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </section>
        </Container>
        {/* </div> */}

        <Container
          maxWidth="xl"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            marginBottom: "60px",
          }}
        >
          <section
            id="Education"
            className={classes.sectionPaddingWithoutBottom}
          >
            <p className={classes.h2} style={{ color: darkMode && "#fff" }}>
              My <span style={{ color: "#ff4a57" }}> IT Education</span>
            </p>
            <div className={classes.educationBox}>
              {educationData.map((item, i) =>
                i % 2 === 0 ? (
                  // <Fade left key={i} spy={reload}>
                  <div
                    className={classes.cardBox}
                    key={i}
                    data-aos="fade-right"
                  >
                    {/* <div className={classes.cardBox} key={i}> */}
                    <div
                      className={classes.card}
                      style={{
                        background: darkMode && "rgba(174, 214, 241,.3)",
                      }}
                    >
                      <div className={classes.cardTitleBox}>
                        <Grid
                          container
                          alignItems="center"
                          style={{ marginBottom: 24 }}
                        >
                          <Grid item xs={12}>
                            <div className={classes.cardTitleMargin}>
                              <p
                                className={classes.h3}
                                style={{
                                  fontWeight: 400,
                                  color: darkMode && "#fff",
                                }}
                              >
                                {" "}
                                {item.subject}
                              </p>
                            </div>
                            <p className={classes.cardSubTitle}>
                              {item.institute}
                            </p>
                          </Grid>
                          {/* <Grid item xs={6} style={{ textAlign: "right" }}>
                            <p className={classes.h5}>
                              <span style={{ color: "#AAB7B8" }}>at</span>{" "}
                              {item.institute}
                            </p>
                          </Grid> */}
                        </Grid>
                      </div>
                      {/* <p className={classes.cardDetail}>{item.detail}</p> */}
                      {/* 111 */}
                      {item.detail?.map((item, i) => (
                        <>
                          <List
                            sx={{
                              width: "100%",
                            }}
                            key={i}
                            data-aos="fade-left"
                            data-aos-delay="300"
                            style={{
                              marginBottom: "5px",
                              padding: "0px",
                            }}
                          >
                            <ListItem style={{ padding: "0px" }}>
                              <ListItemAvatar style={{ minWidth: "0px" }}>
                                {/* <Avatar>
                                  <ImageIcon />
                                </Avatar> */}
                                <Button disabled>
                                  <StopIcon
                                    className={classes.listIcon}
                                    style={{
                                      color: darkMode && "#fff",
                                      border: darkMode && "1px solid #fff",
                                    }}
                                  />
                                </Button>
                              </ListItemAvatar>
                              <ListItemText style={{ paddingRight: "10px" }}>
                                <label
                                  className={classes.cardDetail}
                                  style={{
                                    margin: "0px",
                                    color: darkMode && "#fff",
                                  }}
                                >
                                  {item}
                                </label>
                              </ListItemText>
                            </ListItem>
                          </List>
                        </>
                      ))}
                    </div>
                  </div>
                ) : (
                  // </Fade>
                  // <Fade right key={i} spy={reload}>
                  <div className={classes.cardBox} key={i} data-aos="fade-left">
                    {/* <div className={classes.cardBox} key={i}> */}
                    <div
                      className={classes.card}
                      style={{
                        background: darkMode && "rgba(174, 214, 241,.3)",
                      }}
                    >
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
              <p className={classes.h2} style={{ color: darkMode && "#fff" }}>
                <span style={{ color: "#ff4a57" }}>Contact</span> Me
              </p>
              <div
                className={classes.NotCard}
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={6} sm={6}>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: darkMode && "#fff" }}
                    >
                      11/A, 19/28, Dhaka, Bangladesh
                    </p>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: darkMode && "#fff" }}
                    >
                      mahnayon@gmail.com
                    </p>
                    <p
                      className={`${classes.h5} ${classes.marginBottomStyle}`}
                      style={{ color: darkMode && "#fff" }}
                    >
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
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    className={classes.contactButtonBox}
                    data-aos="zoom-in"
                  >
                    {/* <Fade right> */}

                    <div>
                      <a
                        className={classes.button}
                        // href="https://drive.google.com/file/d/17vtjYpam6cbCyTaZYz1MmHedR3wJSYJp/view?usp=sharing"
                        // target="_blank"
                        href="/Nayon.pdf"
                        download
                      >
                        Download CV
                      </a>
                      <br className={classes.ForMobileVersion} />
                      <br className={classes.ForMobileVersion} />
                      <a
                        className={classes.button2}
                        href="https://www.messenger.com/t/100032252721687"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        {" "}
                        Let's Talk
                      </a>
                    </div>
                    {/* </Fade> */}
                    <br />
                    <br />
                  </Grid>
                </Grid>
              </div>
              <br />
              <br />
              <br />

              <Email darkMode={darkMode} />
            </section>
          </Container>
        </div>
      </div>

      <NavbarDrawer
        openDrawer={openDrawer}
        fnActive={fnActive}
        active={active}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

export default Home;
