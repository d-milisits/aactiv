import React, {useState} from 'react';
import LogIn from './LogIn';
import Logo from '../img/just-logo.png';
import './styles/LogIn.css';

function SignUp() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signUp, setsignUp] = useState(true);

  return (

    <div>
    { signUp ? 
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
          <input id="input" type="email" class="field__input a-field__input" autocomplete="off" placeholder="Enter email here" onChange={e => setEmail(e.target.value)} required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Email</span>
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
          <a href="#">Sign Up</a>
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
