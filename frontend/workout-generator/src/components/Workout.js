import React from 'react';
import NavBar from './NavBar';

function Workout({main, secondary, equip}) {

  function Log() {
    console.log(main);
    console.log(secondary);
    console.log(equip);
  }

  return(
    <div>
      <NavBar />
      <button onClick={() => Log()}>CLICK ME</button>
    </div>
  )
}

export default Workout;