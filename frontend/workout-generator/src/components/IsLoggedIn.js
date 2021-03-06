import React, { useState } from 'react';
import './styles/isLoggedIn.css';
import Logo from '../img/just-logo.png';
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
    <div className="logged-in-page">
      { redirect ? <Redirect from="/login" to="/home" /> : 
        <div data-aos="fade-down" className="isLoggedIn">
          <img src={Logo} alt="logo" height="75" width="75" />
          <div className="already"><h2>Thank you for using AACTIV, {sessionStorage.getItem('username')}.</h2></div>

          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#" onClick={() => logout()}>Log Out</a>
          </div>  

          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#" onClick={() => goHome()}>Homepage</a>
          </div>  

        </div>
      }
    </div>
  )
}

export default IsLoggedIn;