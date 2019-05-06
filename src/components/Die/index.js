import React from "react";
import './die.css'

const Die = ({face , rolling}) => {
  return(
    <i className={`Die fas fa-dice-${face} ${rolling ? 'shaking' : ''}`}></i>
  )  
}

export default Die;
