import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Quote from './components/Quote';
import PreferenceForm from './components/PreferenceForm';
import Workout from './components/Workout';
import LogIn from './components/LogIn';
import Profile from './components/Profile';

function App() {

  // States manipulated in preference form.
  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");
  const [equip, setEquip] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Redirect from="/" to="/home" />
        <Route path="/home">
          <Homepage setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/preferences">
          <PreferenceForm setMain={setMain} setSecondary={setSecondary} setEquip={setEquip} main={main} secondary={secondary} equip={equip} setExercises={setExercises} />
        </Route>
        <Route path="/workout">
          <Workout exercises={exercises} />
        </Route>
        <Route path="/login">
          <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
