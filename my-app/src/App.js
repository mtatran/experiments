import React, { Component } from 'react'
import StateDisplay from "./components/StateDisplay"
import './App.css';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
       <div className="App">
         <StateDisplay url='https://api.github.com/repos/facebook/react/issues'/>
       </div>
      </BrowserRouter>
  );
}

export default App;
