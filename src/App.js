import React from 'react';
import './App.scss';
import MainComponent from "./components/mainComponent/MainComponent";
import {ChartComponent} from "./components/chartComponent/ChartComponent";

let myName = prompt('What\'s your name?');

function App() {
  return (
    <div className="App">
      <h1 className="App-title">My <span>React</span> App</h1>
      <MainComponent myName={myName}/>
      <ChartComponent />
    </div>
  );
}

export default App;
