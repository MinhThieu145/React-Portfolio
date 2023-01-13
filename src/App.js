

import React from 'react';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ShowingSkill from './components/ShowingSkill';

import Skill from './components/Skill';

import TestTabBar from './components/TestTabBar';
function App() {
  return (
    <div className="App">

      <div className='lg:snap-y lg:snap-mandatory sm:snap-none  h-screen w-screen overflow-y-scroll'>
      
        <Home />

        <Skill/>

        <TestTabBar/>   

        <Contact/>

        


      </div>


    </div>
  );
}

export default App;
