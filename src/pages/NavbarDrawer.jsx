import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import ContactsIcon from "@mui/icons-material/Contacts";
import SchoolIcon from "@mui/icons-material/School";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import SurfingIcon from "@mui/icons-material/Surfing";

const useStyles = makeStyles((theme) => ({
  BrandNameStyle: {
    fontSize: "30px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,

    color: "darkcyan",
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: "45px",
    //   lineHeight: "65px",
  },
  menuItem: {
    "& .MuiTypography-root": {
      fontSize: "13px",
      fontWeight: 500,
      color: "darkcyan",
    },
  },
  active: {
    // background: "#5AFF8080 !important",
    background: "#262D54 !important",
    borderRadius: "10px !important",
  },
}));

export default function NavbarDrawer({ openDrawer, fnActive, active }) {
  const classes = useStyles();
  const [activeDrawer, setactiveDrawer] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  useEffect(() => {
    if (activeDrawer) {
      document.getElementById("drawer").click();
    }
  }, [openDrawer]);
  useEffect(() => {
    setactiveDrawer(true);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          className={`${classes.itemStyle}   `}
          onClick={() => fnActive("Home")}
        >
          <p className={`${classes.BrandNameStyle}`}>NAYON</p>
        </ListItem>
        <Divider />
        <br />
        <ListItem
          button
          className={`${classes.itemStyle}  ${
            active === "Home" ? classes.active : null
          }`}
          onClick={() => fnActive("Home")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>Home</ListItemText>
        </ListItem>

        {/* <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "Experties" ? classes.active : null
          }`}
          onClick={() => fnActive("Experties")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <SurfingIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>
            Experties
          </ListItemText>
        </ListItem> */}

        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "Experience" ? classes.active : null
          }`}
          onClick={() => fnActive("Experience")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <AcUnitIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>
            Experience
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "My Works" ? classes.active : null
          }`}
          onClick={() => fnActive("My Works")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <GrainIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>
            My Works
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "Education" ? classes.active : null
          }`}
          onClick={() => fnActive("Education")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <SchoolIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>
            Education
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={`${classes.itemStyle} ${
            active === "Contact" ? classes.active : null
          }`}
          onClick={() => fnActive("Contact")}
        >
          <ListItemIcon style={{ color: "darkcyan", minWidth: "35px" }}>
            <ContactsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className={`${classes.menuItem}`}>Contact</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            id="drawer"
            onClick={toggleDrawer(anchor, true)}
            style={{ display: "none" }}
          >
            {anchor}
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{
              sx: {
                backgroundColor: "#061A38",
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
