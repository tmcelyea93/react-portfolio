import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import * as styles from "../themes/commonStyles";

import Project from "./../Project";
import noteTakerScreenshot from "./../../images/NoteTakerScreenshot.jpg";
import vacationScreenshot from "./../../images/VacationScreenshot.jpg";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "auto",
    },
    headerText: {
      ...styles.headerText,
    },
    projectText: {
      marginTop: "5rem",
    },
    divider: {
      ...styles.divider,
    },
    projectsDivider: {
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  const javascriptIcon = (
    <Icon
      className="devicon-javascript-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const htmlIcon = (
    <Icon
      className="devicon-html5-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const cssIcon = (
    <Icon
      className="devicon-css3-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const noteTakerIcons = (
    <Box className={classes.icons}>
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const vacationIcons = (
    <Box className={classes.icons}>
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const cssArtIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ marginRight: "0.35rem" }}
      />
      {cssIcon}
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Projects">
      <Typography className={`${classes.projectText} ${classes.headerText}`}>
        Projects
      </Typography>
      <Divider className={`${classes.divider} ${classes.projectsDivider}`} />
      <Project
        title="Note Taker"
        icons={noteTakerIcons}
        description="This application allows the user to write notes and save them. Once they are saved the user can edit or delete each note."
        image={noteTakerScreenshot}
        imageTitle="Note Taker screenshot"
        projectLink="https://tarah-note-taker.herokuapp.com/"
        githubLink="https://github.com/tmcelyea93/note-taker"
      />
      <Project
        title="Vacation Planner"
        icons={vacationIcons}
        description=""
        image={vacationScreenshot}
        imageTitle="Vacation screenshot"
        projectLink="https://christian-vavuris.github.io/Trip-Planner/"
        githubLink="https://github.com/Christian-Vavuris/Trip-Planner"
      />
    </Box>
  );
};

export default ProjectsPage;