import React from 'react';
import './styles/Loading.css';
import FadeIn from 'react-fade-in';

function Loading() {

  return(
    <div>
      <FadeIn delay={650} transitionDuration={2500}>
      <body>
        <div className="loader-container">
          <div className="loader-div">
          </div>
        </div>
        <h1 className="generating">Generating your customized workout....</h1>
      </body>
      </FadeIn>
    </div>
  )
}

export default Loading;