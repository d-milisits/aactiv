import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Quote from './components/Quote';
import PreferenceForm from './components/PreferenceForm';
import Workout from './components/Workout';
import LogIn from './components/LogIn';

function App() {

  // States manipulated in preference form.
  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");
  const [equip, setEquip] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Redirect from="/" to="/home" />
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/preferences">
          <PreferenceForm setMain={setMain} setSecondary={setSecondary} setEquip={setEquip} main={main} secondary={secondary} equip={equip} />
        </Route>
        <Route path="/workout">
          <Workout main={main} secondary={secondary} equip={equip} />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
