import React, {useState} from 'react';
import './styles/Exercise.css';
import Aos from 'aos';

function Exercise({name, part, preparation, instructions, setCardPart, setCardPrep, setCardInstructions}) {

  // function Log() {
  //   console.log(instructions);
  // }

  function setInfo() {
    setCardPart(part);
    setCardPrep(preparation);
    setCardInstructions(instructions);
  }

  return(
    <div>
      <h2 className="ex-title" onClick={() => setInfo()}>{name}</h2>
    </div>
  )
}

export default Exercise;