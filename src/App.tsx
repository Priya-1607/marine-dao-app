import React from 'react';
import './App.css';
import boat from './assets/images/boat.svg'

function App() {
  return (
    <div className="App">
      <h1 className='font-bold text-xl'>Hello World</h1>
        <img src={boat}/>
    </div>
  );
}

export default App;
