import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MapComponent from './components/MapComponent';
import Contact from './components/Contact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Publication from './components/Publication';
import Team from './components/Team';
import Outreach from './components/Outreach';
import Project from './components/Project';
import Login from './components/Login';
import ScrollToTop from './components/ScrollToTop';
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<LandingPage />} />
          <Route path='home' element={<MapComponent />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project/>} />
          <Route path='/publications' element={<Publication />} />
          <Route path='/team' element={<Team />} />
          <Route path='/outreach' element={<Outreach />} />
          <Route path='/explore' element={<Explore/>} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
