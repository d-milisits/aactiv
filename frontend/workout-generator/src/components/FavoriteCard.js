import React, {useState} from 'react';
import FadeIn from 'react-fade-in';
import './styles/FavoriteCard.css';
import Logo from '../img/just-logo.png';

function FavoriteCard({favorite, getFavorites, setRemoved}) {

  const [hover, setHover] = useState(false);
  const [text, setText] = useState([]);
  const [nextStep, setNextStep] = useState(false);

    function goToNext() {
      setText(favorite)
      setNextStep(true);  
    }

    const removeFavorite = async () => {
      const data = JSON.stringify({username:sessionStorage.getItem('username'), favorite:text[0]});
      const removeStatus = await fetch('http://0.0.0.0:5000/api/remove', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      })
      const output = await removeStatus.json();
      console.log(output);
      if (output.status === "success") {
        getFavorites();
        setNextStep(false);
        setRemoved(true);
        setTimeout(() => {
          setRemoved(false)
        }, 4000);
      }
    }

    // Since an array of arrays containing long strings separated by commas, 
    // iterate through the master list and iterate through each element SPLIT 
    // at its commas.
  return (
    <div className="favorite-card">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => (setHover(false), setNextStep(false))} className={`favorite-card-content ${hover ? "remove" : ""}`}>
        <FadeIn transitionDuration="2750" delay="400">
        <img src={Logo} alt="logo" onClick={() => console.log(text)} />
          <ul className="title-list">
            {favorite.map(title => (
              title.split(",").map(text => (
                  <li>{text}</li>
              ))
            ))}
          </ul>
        </FadeIn>
      </div>
      { hover ? 
         nextStep ? 
          <h3 onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => removeFavorite()} className="click-remove">CONFIRM?</h3> :
          <h3 onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => goToNext()} className="click-remove">REMOVE [X]</h3>
      : null }
    </div>
  )
}

export default FavoriteCard;
