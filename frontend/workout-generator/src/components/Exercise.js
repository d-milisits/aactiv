import React, {useEffect} from 'react';
import './styles/Exercise.css';
import Aos from 'aos';

function Exercise({name, part, preparation, instructions, video}) {

  function PopUp() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.modal-bg');

    body.classList.toggle('bg-active');
  }

  function Log() {
    console.log(instructions);
  }

  return(
    <div>

      <div className="modal-bg">
        <div className="modal">
          <p className="close" onClick={() => PopUp()}>&#x2613;</p>
          <p>{instructions}</p>
        </div>
      </div>

      <div data-aos="fade-up" class="card-container">
        <div class="card" onClick={() => Log()}>
          <div class="content">
            <h2>{name}</h2>
            <p className="part"><span>Muscles Worked:</span><br></br><br></br>{part}</p>
            <p className="preparation"><span>Preparation:</span><br></br><br></br>{preparation}</p>
            <p className="instructions"><span>Instructions:</span><br></br><br></br>{instructions}</p>
          </div>
          <a className="view" href="#" onClick={() => PopUp()}>More Info</a>
        </div>
      </div>

    </div>
  )
}

export default Exercise;