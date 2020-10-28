import React from 'react';
import './App.css';
import Weapons from './pages/Weapons'
import Sidebar from './components/Sidebar/sidebar.js'
import NavTabs from './components/NavTabs/navTabs.js';

function App() {
  return (
    <>
    <div className='container-fluid container-margin'>
      <div className = 'row-fluid'>
      <NavTabs />
      </div>
      <div className='row-fluid d-flex page-container'>
          <Sidebar />
          <Weapons />
      </div>
    </div>
    
  </>
  );
}

export default App;
