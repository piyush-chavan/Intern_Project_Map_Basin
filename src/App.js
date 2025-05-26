import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MapComponent from './components/MapComponent';
import Contact from './components/Contact';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Publication from './components/Publication';
import Team from './components/Team';
import Outreach from './components/Outreach';
import Project from './components/Project';
import Graph from './components/Graph';
import ExcelChartFromPath from './components/Excel';
import ExcelChartFromFile from './components/Excel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<MapComponent />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project/>} />
          <Route path='/publications' element={<Publication />} />
          <Route path='/team' element={<Team />} />
          <Route path='/outreach' element={<Outreach />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
