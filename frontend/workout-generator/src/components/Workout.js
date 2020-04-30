import React, {useState} from 'react';
import NavBar from './NavBar';
import Loading from './Loading';

function Workout({main, secondary, equip}) {

  const [loading, setLoading] = useState(true);

  function Log() {
    console.log(main);
    console.log(secondary);
    console.log(equip);
  }

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return(
    <div>
      {loading ? <Loading /> : <NavBar />}
    </div>
  )
}

export default Workout;