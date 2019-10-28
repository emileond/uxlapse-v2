import React from 'react'

const ButtonRounded = ({ Icon }) => {
    return (
      <button className="button button-rounded">
      <img src={Icon}/>
      </button>
    ) 
  };
  
  export default ButtonRounded;