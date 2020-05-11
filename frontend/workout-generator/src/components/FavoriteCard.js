import React from 'react';
import './styles/FavoriteCard.css';
import Logo from '../img/just-logo.png';

function FavoriteCard({favorite}) {

    // Since an array of arrays containing long strings separated by commas, 
    // iterate through the master list and iterate through each element SPLIT 
    // at its commas.
  return (
    <div className="favorite-card">
      <div className="favorite-card-content">
        <img src={Logo} alt="logo" />
        <ul className="title-list">
          {favorite.map(title => (
            title.split(",").map(text => (
              <li>{text}</li>
            ))
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FavoriteCard;
