import React from 'react';
import './styles/Exercise.css';
import Aos from 'aos';

function Exercise() {
  return(
    <div data-aos="fade-up" class="card-container">
      <div class="card">
        <div class="content">
          <h2>Exercise 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="#">Watch Video</a>
        </div>
      </div>
    </div>
  )
}

export default Exercise;