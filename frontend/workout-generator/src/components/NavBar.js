import React from 'react';
import './styles/NavBar.css';

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
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Log In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;