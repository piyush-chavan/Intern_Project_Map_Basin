import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MapComponent from './components/MapComponent';
import { useState } from 'react';

function App() {
  const [page,setPage] = useState(0)
  return (
    <div className="App">
      <button onClick={()=>setPage(!page)} className='btn btn-warning' style={{position:'fixed',top:'100px',right:'30px'}}>Change Page {page}</button>
      <Navbar/>
      
      {
        page?
        <MapComponent/>
        :
        <LandingPage/>
      }
    </div>
  );
}

export default App;
