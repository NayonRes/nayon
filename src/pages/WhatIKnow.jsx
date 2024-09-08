import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bootstrap from "../assets/images/bootstrap.png";
import CSharp from "../assets/images/CSharp.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import dotnet from "../assets/images/dotnet.jpg";
import javascript from "../assets/images/javascript.png";
import mssql from "../assets/images/mssql.png";
import material from "../assets/images/material.png";
import reactjs from "../assets/images/reactjs.png";
import visualstudio from "../assets/images/visualstudio.png";
import MSVisualStudioCode from "../assets/images/MSVisualStudioCode.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "120px",
    margin: "10px auto",
    background: "#fff",
    padding: "30px 15px",
    borderRadius: "10px",
    // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    border: "1px solid #ddd",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
    },
  },
  cardTitle: {
    fontSize: "12px",
    margin: "16px 0 0 0",
    color: "#061A38",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
  },
  cardImage: {
    width: "40px",
    height: "40px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      height: "20px",
    },
  },
}));

const WhatIKnow = ({ darkMode }) => {
  const classes = useStyles();
  const data = [
    { img: bootstrap, name: "Bootstrap" },
    { img: CSharp, name: "C#" },
    { img: html5, name: "HTML 5" },
    { img: css3, name: "CSS 3" },
    { img: dotnet, name: ".NET" },
    { img: javascript, name: "JavaScript" },
    { img: mssql, name: "MS SQL Server" },
    { img: material, name: "Material-UI" },
    { img: reactjs, name: "React JS" },
    { img: visualstudio, name: "MS Visual Studio" },
    { img: MSVisualStudioCode, name: "Visual Studio Code" },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i}>
            <div
              className={classes.card}
              style={{
                background: darkMode && "rgba(174, 214, 241,.1)",
                border: darkMode && "none",
              }}
            >
              <img src={item.img} alt="" className={classes.cardImage} />
              <p
                className={classes.cardTitle}
                style={{ color: darkMode && "#fff" }}
              >
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatIKnow;
