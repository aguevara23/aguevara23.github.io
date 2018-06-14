import React from "react";
import classes from "./Icon.css";

import htmlIcon from "../../assets/Icons/html5_badge.png";
import cssIcon from "../../assets/Icons/css3_badge.png";
import jsIcon from "../../assets/Icons/javascript.png";
import reactIcon from "../../assets/Icons/react2.png";
import nodeIcon from "../../assets/Icons/nodejs.png";
import mongodbIcon from "../../assets/Icons/mongodb.png";
import githubIcon from "../../assets/Icons/github.png";

// returns an icon that matches the name prop
const icon = props => {
  const renderImage = () => {
    switch (props.name) {
      case "html5":
        return <img className={classes.Icon} alt={props.name} src={htmlIcon} />;
      case "css3":
        return <img className={classes.Icon} alt={props.name} src={cssIcon} />;
      case "js":
        return <img className={classes.Icon} alt={props.name} src={jsIcon} />;
      case "react":
        return (
          <img className={classes.Icon} alt={props.name} src={reactIcon} />
        );
      case "node":
        return <img className={classes.Icon} alt={props.name} src={nodeIcon} />;
      case "mongodb":
        return (
          <img className={classes.Icon} alt={props.name} src={mongodbIcon} />
        );
      case "github":
        return (
          <img className={classes.Icon} alt={props.name} src={githubIcon} />
        );
      default:
        return null;
    }
  };

  return <div>{renderImage()}</div>;
};

export default icon;
