import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Exercises from './components/Exercises';
import Homepage from './components/Homepage';
import Quote from './components/Quote';
import PreferenceForm from './components/PreferenceForm';
import Workout from './components/Workout';

function App() {

  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");
  const [equip, setEquip] = useState("");
  const [name, setName] = useState("");

  // console.log(main);
  // console.log(secondary);
  // console.log(equip);

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
          <PreferenceForm setMain={setMain} setSecondary={setSecondary} setEquip={setEquip} />
        </Route>
        <Route path="/workout">
          <Workout main={main} secondary={secondary} equip={equip} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
