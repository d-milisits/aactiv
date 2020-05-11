import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import FavoriteCard from './FavoriteCard';
import Logo from '../img/just-logo.png';
import Crossfit from '../img/crossfit.png';
import './styles/Profile.css';

function Profile() {

  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("");

  const getFavorites = async () => {
    const data = JSON.stringify({username:sessionStorage.getItem('username')});
    const status = await fetch ('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:data
    })
    const output = await status.json();
    let response = output.favorites
    if (response !== 'none') {
      setFavorites(response);
      setMessage(`${sessionStorage.getItem('username')}'s saved favorites:`)
    } else {
      setMessage("This account currently has no favorites.");
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  console.log(favorites);

  return (
    <div className="profile">
      <NavBar />

      { sessionStorage.getItem('username') ? 

        <div className="profile-content">
          <img className="weight-img" src={Crossfit} alt="logo"/>
          <p className="profile-message">{message}</p>
          <div className="favorite-content">
            {favorites.map(favorite => (
              <FavoriteCard favorite={favorite} />
            ))}
          </div>
        </div> 
        :
        <div data-aos="fade-down" className="profile-content false">
          <img className="weight-img" src={Logo} alt="logo"/>
          <p className="profile-message">You are not currently logged in.</p>
          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#"><Link to="/login">Log In</Link></a>
          </div>
        </div>

      }

    </div>
  )
}

export default Profile;