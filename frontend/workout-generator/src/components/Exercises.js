import React, {useState} from 'react';

function Exercises() {
  const [exercises, setExercises] = useState([]);

  const getExercises = async () => {
    try {
      const exercises = await fetch("http://localhost:5000/api/exercises");
      const output = await exercises.json();
      setExercises(output.exercises);
      console.log(exercises);
    } catch(err) {
      console.error(err)
    }
  }

  const exercise_list = exercises.map(exercise => {
    return(
      <div>
        <p>Exercise Name: {exercise[1]}</p>
        <p>Instructions: {exercise[2]}</p>
      </div>
    )
  })

  return (
    <div>
      <button id="btn" onClick={e => getExercises()}>View Exercises</button>
      <div className="list">
        {exercise_list}
      </div>
    </div>
  )

}

export default Exercises;