import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import theme from "../../themes/theme";
import * as styles from "../../themes/commonStyles";
import picture from "./../../images/picture.jpg";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
    },
    headerText: {
      ...styles.headerText,
    },
    aboutText: {
      marginTop: "6rem",
    },
    divider: {
      ...styles.divider,
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      lineHeight: "1.6rem",
    },
    link: {
      color: "black",
      textShadow: "1px 1px #b2dfdb",
      textDecoration: "none",
      borderBottom: "1px solid #b2dfdb",
      "&:hover": {
        color: "#b2dfdb",
        cursor: "pointer",
      },
    },
    picture: {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: "1rem",
      marginBottom: "6rem",
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
    },
  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="AboutMe">
        <Typography className={`${classes.aboutText} ${classes.headerText}`}>
          About Me
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography className={classes.bodyText}>
          My name is <b>Tarah McElyea</b> and I am a recent graduate of the Full-Stack Web development
          Program at University of California-Berkely Extension<br /> <br /> I really enjoy programmming and love to be
          always learning something new. I have a strong work ethic 
          and I can quickly pick up on new technologies. <br /> <br />{" "}
          In my spare time I work as a bartender, showing I have the ability to
          work well under pressure. You can find my {/* TODO - add resume link */}{" "}
          <Link
            onClick={scrollToContact}
            className={classes.link}
            underline="none"
          >
            contact information and links here
          </Link>
          .
        </Typography>
        <Box
          component="img"
          src={picture}
          alt="A picture of me"
          className={classes.picture}
        />
      </Box>
      <SkillsPage />
    </div>
  );
};

export default AboutPage;