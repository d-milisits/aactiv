import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';
import Exercise from './Exercise';
import Logo from '../img/just-logo.png';
import './styles/Exercise.css';

function Workout({exercises, main, secondary, equip, setExercises}) {

  const [loading, setLoading] = useState(true);
  const [cardPart, setCardPart] = useState("");
  const [cardPrep, setCardPrep] = useState("");
  const [cardInstructions, setCardInstructions] = useState("");
  const [card, setCard] = useState(false);
  const [added, setAdded] = useState(false);
  const [generate, setGenerate] = useState(false);

  // PopUp Modal to show valid selections.
  function PopUp() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.modal-bg');

    body.classList.toggle('bg-active');
  }

  let exercise_array = [];
  exercises.map(exercise => (
    exercise_array.push(exercise[1])
  ));
  let exercise_string = exercise_array.toString();
  console.log(`The exercise string is ${exercise_string}`);

  // Post request to send JSON data to & add to user_favorites table.
  const addToFavorite = async () => {
    const data = JSON.stringify({username:sessionStorage.getItem('username'), favorite:exercise_string});
    const status = await fetch('http://localhost:5000/api/favorite', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:data
    })
    const output = await status.json();
    let response = output.status
    if (response==="success") {
      clearTimeout();
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }

  // Gets data from flask route and sets workout state to list of workout objects.
  const getWorkout = async () => {
    setGenerate(false);
    const data = JSON.stringify({main:main.toLowerCase(), secondary:secondary.toLowerCase(), equip:equip.toLowerCase()});
    // Turns state passed from App.JS into JSON for Flask route to read.
    const exerciselist = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })
    const output = await exerciselist.json();
    setExercises(output.workout);
    // Gets data sent from flask route and sets in Exercises state
  }

  // Pointless loading screen.
  setTimeout(() => {
    setLoading(false);
  }, 4575);

  return(
    <div className="workout-body">

        { added ? 
          <div className="favorite-added">
            <p data-aos="fade-down" className="positive">This workout has been added to your favorites, <br></br>{sessionStorage.getItem('username')}. Enjoy!</p>
          </div> :
          null
        }

        { generate ? 
          <div className="favorite-added">
            { added ? 
              <p data-aos="fade-down" className="favorite-added">This workout has been added to your favorites, <br></br>{sessionStorage.getItem('username')}. Enjoy!</p> :
              null
            }
          <p data-aos="fade-down" className="favorite-added">Would you like to change your preferences?</p>
          <div data-aos="fade-up" className="button" id="button-3">
            <div id="circle"></div>
            <Link to="/preferences">Yes</Link>
          </div>
          <div data-aos="fade-up" className="button" id="button-3">
            <div id="circle"></div>
            <a href="#" onClick={() => getWorkout()}>No</a>
          </div>
          </div> 
          :
          null
        }

      {loading ? 
      <Loading /> : 
      <div className={`thebody ${generate ? "blurred" : ""}`}>

          <div className="modal-bg">  
            <div className="modal">
              <div className="list-container">
                <h2 className="title">For main muscle groups:</h2>
                <ul className="list">
                  <li>Aim for 6-8 reps with minimum rest and maxmium intensity. </li>
                </ul>
              </div>
              <div className="list-container">
                <h2 className="title">For secondary muscle groups:</h2>
                <ul className="list">
                  <li>Aim for 10-12 reps with minimum rest and maxmium intensity.</li>
                  <li>Lighten the weight moderately in comparison to main muscle
                    group exercises and focus on contraction.
                  </li>
                </ul> 
              </div>
              <div className="list-container">
                <h2 className="title">General advice:</h2>
                <ul className="list">
                  <li>Keep weight heavy and controlled with mind-muscle connection in 
                    check. Focus on the stretch & squeeze of your inputted bodypart in order to get 
                    the most of your workout.
                  </li>
                </ul> 
              </div>
              <p className="close" onClick={() => PopUp()}>&#x2613;</p>
            </div>
          </div>

        <NavBar />
        <div className={`exercise-body ${added ? "blurred" : ""}`}>
          <div data-aos="fade-right" className="exercise-card-container">
            {exercises.map(exercise => (
              <div className="logo-title">
                <img src={Logo} alt="logo" height="70" width="70"/>
                <Exercise name={exercise[1]} part={exercise[7]} preparation={exercise[4]} instructions={exercise[5]} video={exercise[6]} setCardPart={setCardPart} setCardPrep={setCardPrep} setCardInstructions={setCardInstructions} setCard={setCard} />
              </div>
            ))}

            <div className="cta">

              <div className="box">
                <h3 className="cta-prompt">Enjoyed this workout?<br></br>Favorite it.</h3>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={() => addToFavorite()}>Favorite</a>
                </div>
              </div>

              <div className="box">
                <h3 className="cta-prompt">Not Happy?<br></br>Generate another.</h3>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#" onClick={() => setGenerate(true)} >Generate</a>
                </div>
              </div>

            </div>

          </div>
          
          { card ? 
            <div class="card-container">
              <div class="card">
                <div class="content">
                  <p className="part"><span>Muscles Worked:</span><br></br><br></br>{cardPart}</p>
                  <p className="preparation"><span>Preparation:</span><br></br><br></br>{cardPrep}</p>
                  <p className="instructions"><span>Instructions:</span><br></br><br></br>{cardInstructions}</p>
                </div>
                <a className="view" href="#" onClick={() => PopUp()}>More Info</a>
              </div>
            </div>
          : <div data-aos="fade-left" className="clickMe"><h2>Click an exercise<br></br> to view more info.</h2></div>
          }

        </div>

      </div>}

    </div>
  )
}

export default Workout;
