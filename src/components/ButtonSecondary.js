import React from 'react'
import Arrow from "../images/arrow-right.svg"

const ButtonSecondary = ({ buttonText }) => {
    return (
      <>
      <button className="button button-secondary">{buttonText}
      <img src={Arrow}/>
      </button>
      </>
    ) 
  };
  
  export default ButtonSecondary;