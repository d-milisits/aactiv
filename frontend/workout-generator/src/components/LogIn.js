import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import IsLoggedIn from './IsLoggedIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import Logo from '../img/just-logo.png';
import './styles/LogIn.css';

function LogIn({loggedIn, setLoggedIn}) {

  const [signUp, setsignUp] = useState(false);
  // Username/password for SignIn form.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Error handling/messages on screen.
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // Reroutes to homepage if login is successful.
  const [reroute, setReroute] = useState(false);

  // Sends login data to flask route.
  const login = async () => {
    const data = JSON.stringify({username:username, password:password});
    const status = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })
    const output = await status.json();
    // Status checks if login failed or was a success. User is the username returned when successful that is then stored in session storage.
    let response = output.status 
    let user = output.username
      if (response==="failed") {
        setError(true);
        setSuccess(false);
      } else if (response==="success") {
        sessionStorage.setItem('username', user);
        setError(false);
        setSuccess(true);
        // let session = sessionStorage.getItem('username')
        // console.log(`This session username is ${session}.`);
        setTimeout(() => {
          setReroute(true);
        }, 3000);
      }
    }
  
    // If already logged in (user set in SessionStorage), show isLoggedIn screen. Else, prompt to log in/sign up.
  return (
    <div>
      { sessionStorage.getItem('username') && loggedIn ? <IsLoggedIn setLoggedIn={setLoggedIn} /> :
        <div>
        { signUp ? <SignUp /> :
        <div className="login">
          <NavBar />

          <FadeIn transitionDuration="3500">
          <div className={`login-box ${success ? "blurred" : ""}`} >

            <img src={Logo} alt="logo"/>

            { error ? 
            <div className="error-prompt">
            <p className="error-prompt">Account not found. Please try again.</p>
            </div> :
            null
            }

            <label class="field a-field a-field_a3"> 
                <input id="input" class="field__input a-field__input" autocomplete="off" placeholder="Enter name here" onChange={e => setUsername(e.target.value)} required/>
                <span class="a-field__label-wrap">
                  <span class="a-field__label">Username</span>
                </span>
              </label><br></br>

            <label class="field a-field a-field_a3">
              <input id="input2" type="password" class="field__input a-field__input" autocomplete="off" placeholder="Enter password here" onChange={e => setPassword(e.target.value)} required/>
              <span class="a-field__label-wrap">
                <span class="a-field__label">Password</span>
              </span>
            </label><br></br>

            <div className="button" id="button-3">
              <div id="circle"></div>
              <a href="#" onClick={() => login()}>Log In</a>
            </div>

            <div className="signup">
              <a href="#" onClick={() => setsignUp(true)}>Don't have an account? Sign up now.</a>
            </div>
            
          </div>
          </FadeIn>

          { success ? 
            <p data-aos="fade-down" className="success-prompt">Thank you for logging in, {sessionStorage.getItem('username')}!<br></br> Redirecting now...</p> :
            null
          }
          { reroute ? <Redirect from="/login" to="/home" /> : null }

        </div>
        
          }
        </div>
      }
    </div>
  )
}

export default LogIn;
