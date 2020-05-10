import React, { useState, useEffect } from 'react';
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
    } else {
      setMessage("This account currently has no favorites.");
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  // console.log(favorites);

  return (
    <div className="profile">
      {favorites}
    </div>
  )
}

export default Profile;