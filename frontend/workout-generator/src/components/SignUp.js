import React, {useState} from 'react';
import LogIn from './LogIn';
import Logo from '../img/just-logo.png';
import './styles/LogIn.css';
import FadeIn from 'react-fade-in';

function SignUp() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirm, setConfirm] = useState("");
  // If sign up is true, show sign up form. Else, show login form.
  const [signUp, setsignUp] = useState(true);
  // Error message if account already exists in database and success message for account creation success.
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

    // Sends create account information to flask route.
  const createAccount = async () => {
    if (password === confirm) {
      const data = JSON.stringify({username:username, password:password});
      const status = await fetch('http://0.0.0.0:5000/api/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:data
      })
      const output = await status.json();
      let response = output.created;
      // Error handling for failure. Displays error message.
      if (response==="failed") {
        setErrorMessage("Account already exists! Please try again.")
        setError(true);
        setSuccess(false);
      } else if (response==="success") {
        setError(false);
        setSuccess(true);
      }
    } else if (confirm === "") {
      setErrorMessage("You must confirm your password.")
      setSuccess(false);
      setError(true);
    } else if (password !== confirm) {
      setErrorMessage("Passwords do not match. Please try again.")
      setSuccess(false);
      setError(true);
    }
  }

  return (

    <div>
    { signUp ? 
    <div className="login">

      <FadeIn transitionDuration="3500">
      <div className="login-box">

        <img src={Logo} alt="logo"/>

        { error ? 
        <div className="error-prompt">
        <p className="error-prompt">{errorMessage}</p>
        </div> :
        null
        }
        { success ? 
        <p data-aos="fade-up" className="signup-success-prompt">Thank you for signing up, {username}. You can now log in.</p> :
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

        <label class="field a-field a-field_a3">
          <input id="input3" type="password" class="field__input a-field__input" autocomplete="off" placeholder="Enter password here" onChange={e => setConfirm(e.target.value)} required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Confirm Password</span>
          </span>
        </label><br></br>

        <div className="button" id="button-3">
          <div id="circle"></div>
          <a href="#" onClick={() => createAccount()}>Sign Up</a>
        </div>

        <div className="signup">
          <a href="#" onClick={() => setsignUp(false)}>Already have an account? Sign in now.</a>
        </div>
        
        </div>
        </FadeIn>

      </div> :
      <LogIn />
    } 
    </div>

  )
}

export default SignUp;
