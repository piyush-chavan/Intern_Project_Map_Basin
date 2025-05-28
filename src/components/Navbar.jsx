import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    window.location.reload();
  };
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setUserName(userName)
  }, [])
  return (
    <div className='Navbar'>
      <div className='NavTitle'>
        <Link to="/" className="NavTitleLink">
          {/* <img style={{ width: '1.5rem', borderRadius: '1rem' }} src={require("../assets/images/prime_logo.jpg")} alt="" /> */}
          <i class="fa-solid fa-house-flood-water"></i>  Water Extremes Research Group : Web-Tool for Design Flood </Link>
        {userName ? <span className='NavTitleLink' style={{ fontSize: '20px' }}><i class="fa-solid fa-user"></i> {userName}</span> : null}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', backgroundColor: 'var(--secondary)', borderRadius: '16px' }}>
        <div style={{ margin: 'auto 0', padding: 0, minHeight: '5vh', display: 'flex', alignItems: 'center' }}>

          <Link to="/" className="NavLink">Home</Link>
          <Link to="/team" className="NavLink">Team</Link>
          <Link to="/project" className='NavLink'>Project</Link>
          <Link to="/outreach" className="NavLink">Outreach</Link>
          <Link to="/publications" className="NavLink">Publications</Link>
          <Link to="https://faculty.iitr.ac.in/~vinnarasi/" target='_blank' className='NavLink' >Research Group</Link>
          <Link to="/contact" className="NavLink">Help</Link>
          {/* <Link to="/graph" className="NavLink">Graph</Link> */}
        </div>
        <div>
          {userName ?
            <button onClick={handleLogout} className='btn btn-link text-danger' style={{ marginRight: 'auto', textDecoration: 'none', fontWeight: '500' }}> <i class="fa-solid fa-right-from-bracket"></i> LogOut</button>
            : <button onClick={() => navigate('/login')} className='btn btn-link text-success' style={{ marginRight: 'auto', textDecoration: 'none', fontWeight: '500' }}> <i class="fa-solid fa-right-to-bracket"></i> Login</button>
          }
        </div>
      </div>

    </div>
  )
}
