import React from 'react';
import './styles/Exercise.css';
import Aos from 'aos';

function Exercise({name, part, preparation, instructions}) {

  function PopUp() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.modal-bg');

    body.classList.toggle('bg-active');
    console.log(preparation);
  }

  return(
    <div>

      <div className="modal-bg">
        <div className="modal">

          <div className="workout-list-container">
            <h2 className="title">Preparation:</h2>
            <p>{preparation}</p>
          </div>

          <div className="workout-list-container">
            <h2 className="title">Instructions:</h2>
            <p>{instructions}</p>
          </div>

          <p className="close" onClick={() => PopUp()}>&#x2613;</p>

        </div>
      </div>

      <div data-aos="fade-up" class="card-container">
        <div class="card">
          <div class="content">
            <h2>{name}</h2>
            <p>Muscles Worked: {part}</p>
            <a href="#" onClick={() => PopUp()}>View Instructions</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Exercise;