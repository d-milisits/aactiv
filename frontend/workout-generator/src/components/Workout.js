import React from 'react';

function Workout({main, secondary, equip}) {

  function Log() {
    console.log(main);
    console.log(secondary);
    console.log(equip);
  }

  return(
    <div>
      <button onClick={() => Log()}>CLICK ME</button>
    </div>
  )
}

export default Workout;