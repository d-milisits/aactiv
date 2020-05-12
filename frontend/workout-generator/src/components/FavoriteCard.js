import React, {useState} from 'react';
import FadeIn from 'react-fade-in';
import './styles/FavoriteCard.css';
import Logo from '../img/just-logo.png';

function FavoriteCard({favorite}) {

  const [hover, setHover] = useState(false);

    // Since an array of arrays containing long strings separated by commas, 
    // iterate through the master list and iterate through each element SPLIT 
    // at its commas.
  return (
    <div className="favorite-card">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`favorite-card-content ${hover ? "remove" : ""}`}>
        <FadeIn transitionDuration="2750" delay="400">
        <img src={Logo} alt="logo" />
          <ul className="title-list">
            {favorite.map(title => (
              title.split(",").map(text => (
                  <li>{text}</li>
              ))
            ))}
          </ul>
        </FadeIn>
      </div>
      { hover ? <h3 onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="click-remove">REMOVE [X]</h3> : null }
    </div>
  )
}

export default FavoriteCard;
