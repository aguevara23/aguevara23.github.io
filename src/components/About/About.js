import React from 'react';
import classes from './About.css';

const about = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <h1>About Me!</h1>
        <p>
          My name’s Alex. I’m a self-taught web developer from New York. I
          started learning to code a few years ago through Code Academy and Free
          Code Camp. I then switched to Udemy, taking several courses for front
          end and full stack web development with JavaScript.
        </p>
        <p>
          I currently work as a Solutions Engineer at Movable Ink, using
          JavaScript to create dynamic, personalized email content.
        </p>
        <p>
          Aside from coding, I enjoy photography, storytelling, writing,
          traveling, and learning languages.
        </p>
        <p>Visual Studio Code + Vim = &lt;3</p>
        <div className={classes.Buttons}>
          <a target="_blank" href={'https://github.com/aguevara23'}>
            Github
          </a>
          <a
            target="_blank"
            href={'https://www.linkedin.com/in/alexguevara23/'}
          >
            LinkedIn
          </a>
          <a target="_blank" href={'https://www.codewars.com/users/aguevara23'}>
            CodeWars
          </a>
        </div>
      </div>
      <div className={classes.Right}>
        <div>
          <h3>Dev Environment:</h3>
          <ul>
            <li>MacOS</li>
            <li>Visual Studio Code, Vim</li>
            <li>iTerm2</li>
          </ul>
        </div>
        <div>
          <h3>Studying:</h3>
          <ul>
            <li>React</li>
            <li>Golang</li>
            <li>Vim</li>
          </ul>
        </div>
        <div>
          <h3>Reading</h3>
          <ul>
            <li>
              <em>Cracking the Coding Interview</em> by Gayle Laakmann McDowell
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
