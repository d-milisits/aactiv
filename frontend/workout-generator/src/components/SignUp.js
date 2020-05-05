import React, {useState} from 'react';
import LogIn from './LogIn';
import Logo from '../img/just-logo.png';
import './styles/LogIn.css';

function SignUp() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirm, setConfirm] = useState("");
  const [signUp, setsignUp] = useState(true);
  const [error, setError] = useState(false);

  const createAccount = async () => {
    const data = JSON.stringify({username:username, password:password});
    const status = await fetch('http://localhost:5000/api/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:data
    })
    const output = await status.json();
    let response = output.created;
    if (response==="failed") {
      setError(true);
    }
  }

  return (

    <div>
    { signUp ? 
    <div className="login">
      <div data-aos="fade-down" className="login-box">

        <img src={Logo} alt="logo"/>

        { error ? 
        <p className="error-prompt">Account already exists! Please try again.</p> :
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
      </div> :
      <LogIn />
    } 
    </div>

  )
}

export default SignUp;
