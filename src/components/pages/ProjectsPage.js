import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import theme from "../../themes/theme";

import Project from "./../Project";
import noteTakerScreenshot from "./../../images/NoteTaker.png";
import vacationScreenshot from "./../../images/VacationPlanner.png";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      ...theme.typography.button,
      fontSize: "1.5rem",
      marginTop: "4rem",
      textShadow: "0.1rem 0.1rem #b2dfdb",
    },
    divider: {
      backgroundColor: "black",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
    bottomText: {
      color: "black",
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "1rem",
    },
  });
  const classes = useStyles();

  const noteTakerIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-react-original"
        fontSize="inherit"
        style={{ marginRight: "0.3rem" }}
      />
      <span
        className="iconify"
        data-icon="simple-icons:redux"
        data-inline="false"
        style={{ fontSize: "1.5rem", margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-javascript-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-css3-plain"
        fontSize="inherit"
        style={{ marginLeft: "0.3rem" }}
      />
    </Box>
  );

  const vacationIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-react-original"
        fontSize="inherit"
        style={{ marginRight: "0.3rem" }}
      />
      <Icon
        className="devicon-javascript-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-css3-plain"
        fontSize="inherit"
        style={{ marginLeft: "0.3rem" }}
      />
    </Box>
  );

  return (
    <Box className={classes.columnDiv} id="Projects">
      <Typography className={classes.titleText}>Projects</Typography>
      <Divider className={classes.divider} />
      <Project
        title="Note-Taker"
        icons={noteTakerIcons}
        description="An application using Express.js that allows the user to create and save notes. Once the note is saved, the user can edit a note or delete it."
        image={noteTakerScreenshot}
        imageTitle="To-do List screenshot"
        projectLink="https://tarah-note-taker.herokuapp.com/"
        githubLink="https://github.com/tmcelyea93/note-taker"
      />
      <Project
        title="Vacation Planner"
        icons={vacationIcons}
        description="This was a collaborative project that I completed with my classmates. In this project we used html, css, server-side API, and plenty of javascript."
        image={vacationScreenshot}
        imageTitle="Vacation screenshot"
        projectLink="https://christian-vavuris.github.io/Trip-Planner/"
        githubLink="https://github.com/Christian-Vavuris/Trip-Planner"
      />
      <Typography className={classes.bottomText}>More coming soon!</Typography>
    </Box>
  );
};

export default ProjectsPage;