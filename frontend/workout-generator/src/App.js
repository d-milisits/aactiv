import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Exercises from './components/Exercises';
import Homepage from './components/Homepage';
import Quote from './components/Quote';
import PreferenceForm from './components/PreferenceForm';

function App() {
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
          <PreferenceForm />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
