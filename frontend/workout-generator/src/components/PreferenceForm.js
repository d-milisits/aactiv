import React, { useState } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import './styles/PreferenceForm.css';

function PreferenceForm({setMain, setSecondary, setEquip, main, secondary, equip}) {

  const [error, setError] = useState(false);
  const [pass, setPass] = useState(false);

  console.log(main);
  console.log(secondary);
  console.log(equip);

  // CLEAR BUTTON FUNCTIONALITY - Clears inputs and respective states.
  function clearStates() {
    document.getElementById('input').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    setMain("");
    setSecondary("");
    setEquip("");
  }

  // PopUp Modal to show valid selections.
  function PopUp() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.modal-bg');

    body.classList.toggle('bg-active');
  }

  // Function to check if inputs are valid. Returns error message if not.
  function Check() {
    let equip_list = ["barbell", "dumbbell", "cables", "none"];
    let part_list = ["chest", "back", "shoulders", "biceps", "triceps", "calves", "forearms", "glutes", "hams"];
    if ( (!equip_list.includes(equip)) || (!part_list.includes(main)) || (!part_list.includes(secondary)) ) {
      setError(true);
    }
    else {
      setError(false);
      setPass(true);
    }
  }

  return(
    <div className="preference-page">
      
      {/* <div className="wrapper">
        <div className="video-container">
          <iframe src="https://player.vimeo.com/video/415010343?autoplay=1&loop=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div> */}

      <div data-aos="fade-right" className="input-content">

        <h1 className="input-prompt">Please answer the questions below to help us find the best options for you.</h1>
        { error ? 
        <p className="error-prompt">Please type a valid input. Check criteria if needed.</p> :
        <p className="none-prompt">If you have no preference, please type "None".</p>
        }

        <div className="input-field-list">

          <label class="field a-field a-field_a3">
            <input id="input" class="field__input a-field__input" autocomplete="off" placeholder="e.g. 'Back'" onChange={e => setMain(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Main Muscle Group?</span>
            </span>
          </label><br></br>

          <label class="field a-field a-field_a3">
            <input id="input2" class="field__input a-field__input" autocomplete="off" placeholder="e.g. 'Biceps'" onChange={e => setSecondary(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Secondary Muscle Group?</span>
            </span>
          </label><br></br>

          <label class="field a-field a-field_a3">
            <input id="input3" class="field__input a-field__input" autocomplete="off" placeholder="e.g. Dumbbells" onChange={e => setEquip(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Equipment Preference?</span>
            </span>
          </label><br></br>

          <div className="button-container">
            <div className="button" id="button-3">
                  <div id="circle"></div>
                  {/* Checks if inputs are valid. If not, error. If pass=true, route to workout. */}
                  <a href="#" onClick={() => Check()}>SUBMIT</a>
                  { pass ? 
                    <Redirect from="/preferences" to="/workout" /> :
                    null
                  }
              </div>
              <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={e => clearStates()}>CLEAR</a>
            </div>
            <div className="popup-button">
            <div className="button" id="button-3">
              <div id="circle"></div>
              <a href="#" onClick={() => PopUp()}>View Groups</a>
            </div>
          </div>
          </div>

        </div>

      </div>
        <div className="blank-right">

          <div className="modal-bg">
            <div className="modal">
              <div className="list-container">
                <h2 className="title">Main Muscle Groups:</h2>
                <ul className="list">
                  <li>Back</li>
                  <li>Biceps</li>
                  <li>Triceps</li>
                  <li>Shoulders</li>
                  <li>Abs</li>
                  <li>Chest</li>
                </ul>
              </div>
              <div className="list-container">
                <h2 className="title">Equipment Groups:</h2>
                <ul className="list">
                  <li>Barbell</li>
                  <li>Dumbbell</li>
                  <li>Cables</li>
                  <li>NONE</li>
                </ul> 
              </div>
              <p className="close" onClick={() => PopUp()}>&#x2613;</p>
            </div>
          </div>

        </div>
    </div>
  );
}

export default PreferenceForm;