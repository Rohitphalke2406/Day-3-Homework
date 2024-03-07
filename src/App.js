import React from 'react';
import Header from './Header';
import Navbar from './navbar';
import BodySection from './bodySection';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <BodySection/>
      <Footer/>
    </div>
  );
}

export default App;
