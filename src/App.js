import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  let [ counter, changeCounter ] = useState(1) 
{/* you can set useState to whatever you'd like. Its what will be passed into "counter" which is the first item in the array. */}
    window.changeCounter = changeCounter
{/* "window." is what allows for the page to update automatically. 
Calling the function, changeCounter, inside of the developer tools of course. 
So if you changeCounter(whatever argument is passed in here) in developer tools it'll update the page 
automatically.*/}
  return (
    <div>
    <h1>{counter}</h1>
    <h4>{counter}</h4>
{/*{counter} is the javascript being interprolated into jsx using the curly brackets.*/} 
    </div>
  );
}

export default App;
