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
    <div>
     Every method in the fs module has synchronous as well as asynchronous forms.
        Asynchronous methods take the last parameter as the completion function callback 
        and the first parameter of the callback function as error. It is better to 
        use an asynchronous method instead of a synchronous method, as the former
         never blocks a program during its execution, whereas the second one does.

         Every method in the fs module has synchronous as well as asynchronous forms.
        Asynchronous methods take the last parameter as the completion function callback 
        and the first parameter of the callback function as error. It is better to 
        use an asynchronous method instead of a synchronous method, as the former
         never blocks a program during its execution, whereas the second one does.

         Every method in the fs module has synchronous as well as asynchronous forms.
        Asynchronous methods take the last parameter as the completion function callback 
        and the first parameter of the callback function as error. It is better to 
        use an asynchronous method instead of a synchronous method, as the former
         never blocks a program during its execution, whereas the second one does.
    </div>
  );
};

export default AboutUs;
