import './App.css'
import React from 'react';
import {Card} from "./components/Card/Card.jsx";
import Main from "./components/pages/Main/Main.jsx";

function App() {
  return (
    <div className="app-window-container">
        <div className="app-window">
            <Main />
        </div>
    </div>
  )
}


export default App;
