import React from "react";
import styled from 'styled-components';


const Button = styled.button`
      height: 90px;
      width: 100px;
      border-radius: 50%;
      margin: 1% 1%;
      background-color: blue;
      color: white;
      font-size: 2rem;`;

export const NumberButton = (props) => {
  return (
      <Button>
        {/* Display a button element rendering the data being passed down from the parent container on props */
          props.char
        }
      </Button>
    

  );
};
