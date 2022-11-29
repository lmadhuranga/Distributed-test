import React from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './Solution';

function App() {
    
  const menuConfig = [
    { title: 'Home' }, 
    { title: 'AboutUs',  subItems:['Vision', 'Mission'] },
    { title: 'ContactUs',  subItems:[ 'Email', 'Telephone'] },
  ];

  return (
    <div className="App">
       <h1>App</h1>
       <Solution menuConfig={menuConfig} ></Solution> 
    </div>
  );
}

export default App;
