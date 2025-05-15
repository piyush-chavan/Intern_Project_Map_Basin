import React from 'react'
import './styles.css'

export default function Navbar() {
  return (
    <div>
      <div className='Navbar'>
        <div className='NavTitle'>
            <a href="" className="NavTitleLink">HydroMetLab            </a>
        </div>
        <div className='NavLinkbox'>
            <a href="" className="NavLink">Home</a>
            <a href="" className="NavLink">Team</a>
            <a href="" className="NavLink">Publications</a>
            <a href="" className="NavLink">Outreach</a>
            <a href="" className="NavLink">Help</a>
        </div>
        <div className='NavButtons'>
            <button className='btn btn-primary-outline' style={{color:'white',marginRight:'10px'}}>Login</button>
            <button className='btn btn-primary'>Register</button>
        </div>

      </div>
    </div>
  )
}
