import React from 'react';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

  function Animation() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.page');

    body.classList.toggle('open');
  }

  return (
    <div className="page">
      <header>
        <div className="container">
          <nav className="nav">
            <h1 className="specific-aactiv">AACTIV</h1>
            <div className="specific-menu-toggle">
              <p onClick={() => Animation()} className="menu">&#x2630;</p>   
              <p onClick={() => Animation()} className="times">&#x2716;</p>
            </div> 
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">{sessionStorage.getItem('username') ? "Log Out" : "Log In"}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;