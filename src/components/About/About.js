import React from "react";
import classes from "./About.css";

const about = () => {
  return (
    <div className={classes.Container}>
      <div>
        <h1>About Me</h1>
        <p>lakjdlkfj alkdjf lkadjfldf</p>
        <div className={classes.Buttons}>
          <a target="_blank" href={"https://github.com/aguevara23"}>
            Github
          </a>
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/alexguevara23/"}
          >
            LinkedIn
          </a>
          <a target="_blank" href={"https://www.codewars.com/users/aguevara23"}>
            CodeWars
          </a>
        </div>
      </div>
      <div>
        <div>
          <h3>Dev Environment:</h3>
          <ul>
            <li>MacOS</li>
            <li>Visual Studio Code, Vim, Xcode</li>
            <li>iTerm2</li>
          </ul>
        </div>
        <div>
          <h3>Currently Learning:</h3>
          <ul>
            <li>React Native</li>
            <li>C++</li>
            <li>Vim</li>
            <li>Japanese</li>
          </ul>
        </div>
        <div>
          <h3>Currently Reading:</h3>
          <ul>
            <li>temp</li>
          </ul>
        </div>
        {/* <div>
          <h3>Github Activity:</h3>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default about;
