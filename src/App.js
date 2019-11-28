import React from 'react';
import './App.scss';
import MainComponent, {ChartComponent} from "./components/mainComponent/mainComponent";

function App() {
  let myName = prompt('What\'s your name?');
  return (
    <div className="App">
      <h1 className="App-title">My <span>React</span> App</h1>
      <MainComponent myName={myName}/>
      <ChartComponent />
    </div>
  );
}

export default App;
