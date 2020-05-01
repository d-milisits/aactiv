import React, {useState} from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
import Exercise from './Exercise';
import './styles/Exercise.css';

function Workout({main, secondary, equip}) {

  // Passes in preference form states from App.js

  const [loading, setLoading] = useState(true);
  const exercises = [1,2,3,4,5,6];

  setTimeout(() => {
    setLoading(false);
  }, 5500);

  const exercise_cards = exercises.map((exercise) => <div><Exercise/><br></br></div>);

  return(
    <div>
      {
      loading ? <Loading /> : 
        <div className="thebody">
          <NavBar />
          <div className="exercise-card-container">
            {exercise_cards}
          </div>
        </div>
      }
    </div>
  )
}

export default Workout;