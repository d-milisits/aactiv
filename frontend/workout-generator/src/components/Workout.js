import React, {useState} from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
import Exercise from './Exercise';
import './styles/Exercise.css';

function Workout({main, secondary, equip}) {

  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);

  // Passes in preference form states from App.js

  const getWorkout = async () => {
    const data = JSON.stringify({main:main.toLowerCase(), secondary:secondary.toLowerCase()});
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

  setTimeout(() => {
    setLoading(false);
  }, 4575);

  return(
    <div>
      {loading ? 
      <Loading /> : 
      <div className="thebody">
        <NavBar />
        <div className="exercise-card-container">
          <h1 onClick={e => getWorkout()} >Test</h1><br></br>
          {exercises.map(exercise => (
            <div><Exercise name={exercise[1]} part={exercise[7]} preparation={exercise[4]} instructions={exercise[5]} /><br></br></div>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default Workout;