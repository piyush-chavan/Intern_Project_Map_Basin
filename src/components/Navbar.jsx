import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='NavTitle'>
        <Link to="/" className="NavTitleLink">
          <img style={{ width: '1.5rem', borderRadius: '1rem' }} src={require("../assets/images/prime_logo.jpg")} alt="" />
          Water Extremes Research Group : Web-Tool for Design Flood </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', backgroundColor: 'var(--secondary)', borderRadius: '16px' }}>
        <div style={{ margin: 'auto 0', padding: 0 }}>

          <Link to="/" className="NavLink">Home</Link>
          <Link to="/team" className="NavLink">Team</Link>
          <Link to="/project" className='NavLink'>Project</Link>
          <Link to="/outreach" className="NavLink">Outreach</Link>
          <Link to="/publications" className="NavLink">Publications</Link>
          <Link to="https://faculty.iitr.ac.in/~vinnarasi/" target='_blank' className='NavLink' >Research Group</Link>
          <Link to="/contact" className="NavLink">Help</Link>
          <Link to="/graph" className="NavLink">Graph</Link>
        </div>
        <div>
          <button className='btn btn-info' style={{ marginRight: 'auto' }}> <i class="fa-solid fa-right-from-bracket"></i> LogOut</button>
        </div>
      </div>

    </div>
  )
}
