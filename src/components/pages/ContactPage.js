import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography, Link, IconButton, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as styles from "../../themes/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      width: "100%",
    mainDiv: {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      marginTop: "1rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "0.5rem",
      textShadow: "0.12rem 0.12rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      margin: "0.5rem",
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.5rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <IconButton
        className={classes.icon}
        aria-label="LinkedIn Link"
        onClick={() =>
          window.open("https://www.linkedin.com/in/tarah-mcelyea-62a8b41a9/")
        }
      >
        <LinkedInIcon className={classes.linkedIn} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="GitHub link"
        onClick={() => window.open("https://github.com/tmcelyea93/")}
      >
        <GitHubIcon className={classes.github} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="Twitter link"
        onClick={() => window.open("https://twitter.com")}
      >
        <TwitterIcon className={classes.twitter} />
      </IconButton>
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
    <Typography className={`${classes.headerText} ${classes.contactText}`}>
      Contact Me
    </Typography>
    <Divider
      classes={{ root: `${classes.divider} ${classes.contactDivider}` }}
    />
      <Box className={classes.rowDiv}>
        <Typography className={classes.emailText}>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Link href="mailto: tarahmcelyea@gmail.com" className={classes.link}>
          tarahmcelyea@gmail.com
        </Link>
      </Box>
      {icons}
    </Box>
  );
};

export default ContactPage;