import React from "react";

export const OperatorButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        props.char, props.value
      }
    </button>
  );
};
