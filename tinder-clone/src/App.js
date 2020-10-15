import React from 'react';

import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //naming convention  vikas
    <div className="app">
     
     
  <Header/>
   <TinderCards />
  <SwipeButtons />

    </div>
  );
}

export default App;
