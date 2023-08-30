import React from 'react';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstname = {"Sasha"} lastname = {"Gri"} age = {"17"} haircolor = {"Brown"}/>
      <PersonCardComponent firstname = {"Sasha"} lastname = {"Gri"} age = {"17"} haircolor = {"Brown"}/>
      <PersonCardComponent firstname = {"Sasha"} lastname = {"Gri"} age = {"17"} haircolor = {"Brown"}/>
    </div>
  );
}

export default App;
