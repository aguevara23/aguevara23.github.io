import React from "react";
import classes from "./About.css";

const about = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <h1>About Me!</h1>
        <p>
          My name’s Alex. I’m a self-taught web developer from Nyack, New York.
          I started learning to code a couple of years ago through Code Academy
          and Free Code Camp. I then switched to Udemy, taking several courses
          for front end and full stack web development with JavaScript.
        </p>
        <p>
          I work primarily on the front end with React as my library of choice.
          However, I have experience with full stack JavaScript, using Node.js,
          Express.js, and MongoDB for the backend.
        </p>
        <p>
          Aside from coding, I enjoy photography, storytelling, writing,
          traveling, and learning languages. I also have an avid interest in
          virtual reality and can’t wait for the second generation of VR
          headsets. I’m also currently taking classes at The City College of New
          York.
        </p>
        <p>Visual Studio Code + Vim = &lt;3</p>
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
      <div className={classes.Right}>
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
          </ul>
        </div>
        <div>
          <h3>Currently Reading:</h3>
          <ul>
            <li>
              <em>Othello</em> by William Shakespeare
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
