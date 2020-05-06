import React, {useState, useEffect} from 'react';
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

  console.log(exercises);

  setTimeout(() => {
    setLoading(false);
  }, 4575);

  return(
    <div>
      {loading ? 
      <Loading /> : 
      <div className="thebody">
        <NavBar />
        <div className="exercise-body">

          <div className="exercise-card-container">
            <h2 className="today">Today's Workout:</h2>
            {exercises.map(exercise => (
              <div className="logo-title">
                <img src={Logo} alt="logo" height="70" width="70"/>
                <Exercise name={exercise[1]} part={exercise[7]} preparation={exercise[4]} instructions={exercise[5]} video={exercise[6]} setCardPart={setCardPart} setCardPrep={setCardPrep} setCardInstructions={setCardInstructions} />
              <br></br></div>
            ))}
          </div>

          <div data-aos="fade-left" class="card-container">
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

        </div>
      </div>}
    </div>
  )
}

export default Workout;
