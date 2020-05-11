import React, {useState} from 'react';
import './styles/FavoriteCard.css';
import Logo from '../img/just-logo.png';

function FavoriteCard({favorite}) {

  const [hover, setHover] = useState(false);

  function Test() {
    console.log("working");
  }

    // Since an array of arrays containing long strings separated by commas, 
    // iterate through the master list and iterate through each element SPLIT 
    // at its commas.
  return (
    <div className="favorite-card">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`favorite-card-content ${hover ? "remove" : ""}`}>
        <img src={Logo} alt="logo" />
        <ul className="title-list">
          {favorite.map(title => (
            title.split(",").map(text => (
              <li>{text}</li>
            ))
          ))}
        </ul>
      </div>
      { hover ? <h3 onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="click-remove">REMOVE [X]</h3> : null }
    </div>
  )
}

export default FavoriteCard;
