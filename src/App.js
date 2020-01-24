import React from 'react';
import './scss/main.scss';
import SideNav from './includes/sidenav';
import Home from './pages/Home';
import Information from './pages/Information';
import Shelter from './pages/Shelter';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Home />
      <Information />
      <Shelter />
    </div>
  );
}

export default App;
