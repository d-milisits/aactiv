import React, {useState} from 'react';
import SignUp from './SignUp';
import Logo from '../img/just-logo.png';
import './styles/LogIn.css';

function LogIn({setUsername, setPassword}) {

  const [signUp, setsignUp] = useState(false);

  return (
    <div>
      { signUp ? <SignUp /> :
      <div className="login">
        <div data-aos="fade-down" className="login-box">

          <img src={Logo} alt="logo"/>

          <label class="field a-field a-field_a3">
              <input id="input" class="field__input a-field__input" autocomplete="off" placeholder="Enter name here" onChange={e => setPassword(e.target.value)} required/>
              <span class="a-field__label-wrap">
                <span class="a-field__label">Username</span>
              </span>
            </label><br></br>

          <label class="field a-field a-field_a3">
            <input id="input2" type="password" class="field__input a-field__input" autocomplete="off" placeholder="Enter password here" onChange={e => setUsername(e.target.value)} required/>
            <span class="a-field__label-wrap">
              <span class="a-field__label">Password</span>
            </span>
          </label><br></br>

          <div className="button" id="button-3">
            <div id="circle"></div>
            <a href="#">Log In</a>
          </div>

          <div className="signup">
            <a href="#" onClick={() => setsignUp(true)}>Don't have an account? Sign up now.</a>
          </div>
          
        </div>
      </div>
      }
    </div>
  )
}

export default LogIn;
