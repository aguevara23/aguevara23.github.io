import React, { Fragment } from 'react';
import classes from './Image.css';

import Wischen from '../../assets/projectImages/wischen.jpg';
import RealEstate from '../../assets/projectImages/realestate.jpg';
import InteriorDesign from '../../assets/projectImages/interiordesign.jpg';
import Splatter from '../../assets/projectImages/splatter.jpg';
import Dribbble01 from '../../assets/projectImages/dribbble01.jpg';

// uses different styles depending on type prop
const image = props => {
  let style = null;
  props.type === 'main'
    ? (style = classes.MainImage)
    : (style = classes.BGImage);

  // loads different Images depending on the source prop
  const loadImage = () => {
    switch (props.source) {
      case 'Wischen':
        return (
          <img
            className={style}
            src={Wischen}
            alt="A react app that lets people create a watchlist of movies"
          />
        );
      case 'Real Estate Website':
        return (
          <img
            className={style}
            src={RealEstate}
            alt="A responsive redesign for a real estate website"
          />
        );
      case 'Splatter':
        return (
          <img
            className={style}
            src={Splatter}
            alt="An fun app for creating simple splatter art"
          />
        );
      case 'Interior Design':
        return (
          <img
            className={style}
            src={InteriorDesign}
            alt="A portfolio website for an interior designer"
          />
        );
      case 'Landing Page':
        return (
          <img
            className={style}
            src={Dribbble01}
            alt="A mobile responsive landing page"
          />
        );
      default:
        return null;
    }
  };
  return <Fragment>{loadImage()}</Fragment>;
};

export default image;
