import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import './styles/Quote.css';

function Quote() {

  const [quote, setQuote] = useState("");
  const [toggle, setToggle] = useState(false);

  const getQuote = async () => {
    setToggle(true);
    try {
      const quotes = await fetch("http://localhost:5000/api/quote");
      const output = await quotes.json();
      // output.quote -- ".quote" is the JSON key being returned from python. 
      setQuote(output.quote);
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="quote-page">

      <div data-aos="fade-down" className="prompt-content">
        <h1 className="quote-prompt">Before we begin, it is our belief that being motivated
          is key to a successful day.
        </h1>
        <h2 className="quote-entry">Would you like to see a motivational quote?</h2>
        <div className="button-container">
            <div className="button" id="button-3">
              <div id="circle"></div>
              <a href="#" onClick={e => getQuote()}>YES</a>
            </div>
            <div className="button" id="button-3">
              <div id="circle"></div>
              <Link to="/preferences">NO</Link>
            </div>
        </div>
      </div>
      <div className="quote">
        <h1 className="quote-content">{quote}</h1>
        {toggle ? 
          <div data-aos="fade-up" className="continue-container">
            <div className="button" id="button-3">
                <div id="circle"></div>
                <a href="#" onClick={e => getQuote()}>ONE MORE</a>
              </div>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <Link to="/preferences">CONTINUE</Link>
              </div>
          </div> :
          null
      }
      </div>
    </div>
  );
}

export default Quote;