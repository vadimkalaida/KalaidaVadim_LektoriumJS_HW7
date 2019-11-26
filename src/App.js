import React from 'react';
import './App.scss';
import MainComponent from "./components/mainComponent/mainComponent";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">My <span>React</span> App</h1>
      <MainComponent />
    </div>
  );
}

export default App;
