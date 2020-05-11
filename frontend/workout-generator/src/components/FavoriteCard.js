import React from 'react';
import './styles/FavoriteCard.css';
import { useState } from 'react';

function FavoriteCard({favorite}) {

  return (
    <div className="favorite-card">
      <div className="favorite-card-content">
        <ul className="title-list">
          {favorite.map(title => (
            <li>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FavoriteCard;
