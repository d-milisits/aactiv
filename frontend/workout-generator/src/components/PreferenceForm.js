import React, { useState } from 'react';
import Aos from 'aos';
import './styles/PreferenceForm.css';

function PreferenceForm() {

  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");
  const [equip, setEquip] = useState("");

  // CLEAR BUTTON FUNCTIONALITY - Clears inputs and respective states.
  function clearStates() {
    document.getElementById('input').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    setMain("");
    setSecondary("");
    setEquip("");
  }

  function PopUp() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.modal-bg');

    body.classList.toggle('bg-active');
  }

  return(
    <div className="preference-page">
      <div data-aos="fade-right" className="input-content">

        <h1 className="input-prompt">Please answer the questions below to help us find the best options for you.</h1>
        <p className="none-prompt">If you have no preference, please type "None".</p>

        <div className="input-field-list">

          <label class="field a-field a-field_a3">
            <input id="input" class="field__input a-field__input" placeholder="e.g. 'Back'" onChange={e => setMain(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Main Muscle Group?</span>
            </span>
          </label><br></br>

          <label class="field a-field a-field_a3">
            <input id="input2" class="field__input a-field__input" placeholder="e.g. 'Biceps'" onChange={e => setSecondary(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Secondary Muscle Group?</span>
            </span>
          </label><br></br>

          <label class="field a-field a-field_a3">
            <input id="input3" class="field__input a-field__input" placeholder="e.g. Dumbbells" onChange={e => setEquip(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Equipment Preference?</span>
            </span>
          </label><br></br>

          <div className="button-container">
            <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#">SUBMIT</a>
              </div>
              <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={e => clearStates()}>CLEAR</a>
            </div>
          </div>

        </div>

      </div>
        <div className="blank-right">

          <div className="popup-button">
            <div className="button" id="button-3">
              <div id="circle"></div>
              <a href="#" onClick={() => PopUp()}>View Criteria</a>
            </div>
          </div>

          <div className="modal-bg">
            <div className="modal">
              <h2>Information in our database:</h2>
              <ul>
                <li>Hey</li>
                <li>Hey2</li>
                <li>Hey3</li>
                <li>Hey4</li>
              </ul>
              <p className="close" onClick={() => PopUp()}>&#x2613;</p>
            </div>
          </div>

        </div>
    </div>
  );
}

export default PreferenceForm;