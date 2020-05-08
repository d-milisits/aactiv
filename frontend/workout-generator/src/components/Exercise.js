import React, {useState} from 'react';
import './styles/Exercise.css';

function Exercise({name, part, preparation, instructions, setCardPart, setCardPrep, setCardInstructions, setCard}) {

  function setInfo() {
    setCardPart(part);
    setCardPrep(preparation);
    setCardInstructions(instructions);
    setCard(true);
  }

  return(
    <div>
      <h2 className="ex-title" onClick={() => setInfo()}>{name}</h2>
    </div>
  )
}

export default Exercise;