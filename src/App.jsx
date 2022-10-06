import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
