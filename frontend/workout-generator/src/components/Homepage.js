import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/Homepage.css';
import Logo from '../img/logo.png';

function Homepage({setLoggedIn}) {

    // Animation for navbar opening
  function Animation() {
    const selectElement = function (element) {
      return document.querySelector(element);
    };
    
    let body = selectElement('.page');

    body.classList.toggle('open');
  }

  useEffect(() => {
      Aos.init({duration: 3000});
    }, [ ]);

  return(
    <div className="page">

      {/* Checks if user is in session */}
      { sessionStorage.getItem('username') ? setLoggedIn(true) : setLoggedIn(false) }

      <header>
        <div className="container">
          <nav className="nav">
            <h1 className="aactiv">AACTIV</h1>
            <div className="menu-toggle">
              <p onClick={() => Animation()} className="menu">&#x2630;</p>   
              <p onClick={() => Animation()} className="times">&#x2716;</p>
            </div> 
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">My Profile</a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">{sessionStorage.getItem('username') ? "Log Out" : "Log In"}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* END OF HEADER SECTION */}
      <section className="hero" id="hero">
          <div className="container">
            <FadeIn delay={375} transitionDuration={2500}>
            <h2 className="sub-headline">
              Power In Variety.
            </h2>
            <img className="logo" src={Logo} alt="Logo" />
            </FadeIn>
            <div className="headline-description">
              <div className="separator">
                <div className="line line-left"></div>
                <div className="asterisk">
                  <p>&#x26AC;</p>
                </div>
                <div className="line line-right"></div>
              </div>
              <div className="single-animation">
                <Link to="/quote" className="btn cta-btn">transform</Link>
              </div>
            </div>
          </div>
      </section>
      {/* END OF HERO SECTION */}
      <section className="the-point">
        <div className="container-two">
          <div data-aos="fade-right" className="point-info">
            <div className="point-text padding-right animate-left">
              <div className="global-headline">
                <h2 className="sub-headline">
                  The <span className="first-letter">P</span>oint
                </h2>
                <h1 className="headline headline-dark">Why AACTIV?</h1>
                <div className="asterisk"><p>&#x26AC;</p></div>
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" class="btn body-btn">How To Use AACTIV</a>
            </div>
          </div>
          <div className="point-info-img">
          </div>
        </div>
      </section>
      {/* END OF POINT SECTION */}
      <section className="get-started">
        <div className="container-two">
          <div className="get-started-img">
          </div>
          <div data-aos="fade-left" className="start-info">
            <div className="start-text">
            <div className="global-headline">
                <h2 className="sub-headline">
                  It's time to transform.
                </h2>
                <h1 className="headline headline-dark">The process is simple.</h1>
                <div className="asterisk"><p>&#x26AC;</p></div>
              </div>
              <p>
                Enter the site, answer the preference-based questionairre,
                and immediately generate a new workout with the touch of a button.
                Less time thinking of how to mix-up your workouts and more time working.
              </p>
              <div className="global-headline">
                <h2 className="sub-headline">
                  Get AACTIV.
                </h2>
                <h1 className="headline headline-dark">Let's get started!</h1>
                <div className="asterisk"><p>&#x26AC;</p></div>
              </div>
              <p>
                Click the button below to return to the homepage, 
                then click transform to enter the site.
              </p>
              <a href="#" class="btn body-btn">Let's get to work.</a>
            </div>
          </div>
        </div>
      </section>
      {/* END OF GET STARTED */}
      <Footer />
    </div>
  );
}

export default Homepage;