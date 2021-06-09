import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
} from "reactstrap";
import Speech from 'react-speech';

const style = {
   
        width: '28',
        height: '28',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'yellow',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
   
  };
const AboutUs = ( {style}) => {
  return (
    <div style={{marginTop:20}}>
      <h3><b>Watch YouTube video ad Free Free!!!</b></h3>

      <h6>Enjoy watching ad free YouTube Video on this platform. You need to copy 
        paste the youtube url or youtube video ID in the input box and play your 
        favourite video without any intervention.

      </h6>

      <h1>Go to "YouTube Video Tab or Click Here: <a href="https://vikapp1.herokuapp.com/youtube">YouTube Video</a></h1>
    </div>
  );
};

export default AboutUs;
