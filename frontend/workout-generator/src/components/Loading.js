import React from 'react';
import './styles/Loading.css';
import FadeIn from 'react-fade-in';

function Loading() {

  return(
    <div className="loading">
      <FadeIn delay={650} transitionDuration={2500}>
      <body>
        <div className="loader-container">
          <div className="loader-div">
          </div>
        </div>
  <h1 className="generating">Thank you for using AACTIV, {sessionStorage.getItem('username')}!<br></br>Generating your workout now...</h1>
      </body>
      </FadeIn>
    </div>
  )
}

export default Loading;