import React, { useState } from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
import Exercise from './Exercise';
import Logo from '../img/just-logo.png';
import './styles/Exercise.css';

function Workout({exercises}) {

  const [loading, setLoading] = useState(true);
  const [cardPart, setCardPart] = useState("");
  const [cardPrep, setCardPrep] = useState("");
  const [cardInstructions, setCardInstructions] = useState("");
  const [card, setCard] = useState(false);
  const [added, setAdded] = useState(false);

  // console.log(exercises);

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
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }

  // Pointless loading screen.
  setTimeout(() => {
    setLoading(false);
  }, 4575);

  return(
    <div className="workout-body">
      {loading ? 
      <Loading /> : 
      <div className="thebody">
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
              <h3 className="cta-prompt">Enjoyed this workout?<br></br>Add it to your favorites.</h3>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <a href="#" onClick={() => addToFavorite()}>Favorite</a>
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
                {/* <a className="view" href="#" onClick={() => PopUp()}>More Info</a> */}
                <a className="view" href="#">More Info</a>
              </div>
            </div>
          : <div data-aos="fade-left" className="clickMe"><h2>Click an exercise<br></br> to view more info.</h2></div>
          }

        </div>

        { added ? 
          <p data-aos="fade-up" className="success-prompt">This workout has been added to your favorites, <br></br>{sessionStorage.getItem('username')}. Enjoy!</p> :
          null
        }

      </div>}

    </div>
  )
}

export default Workout;
