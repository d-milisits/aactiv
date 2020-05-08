import React, { useState } from 'react';
import './styles/isLoggedIn.css';
import { Redirect } from 'react-router-dom';

function IsLoggedIn() {

  const [redirect, setRedirect] = useState(false);

  function logout() {
    sessionStorage.clear();
    setRedirect(true);
  }
  function goHome() {
    setRedirect(true);
  }

  return (
    <div className="page">
      { redirect ? <Redirect from="/login" to="/home" /> : 
        <div data-aos="fade-down" className="isLoggedIn">
          <div className="already"><h2>You are already logged in, {sessionStorage.getItem('username')}.</h2></div>

          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#" onClick={() => logout()}>Log Out</a>
          </div>  

          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#" onClick={() => goHome()}>Go Home</a>
          </div>  

        </div>
      }
    </div>
  )
}

export default IsLoggedIn;