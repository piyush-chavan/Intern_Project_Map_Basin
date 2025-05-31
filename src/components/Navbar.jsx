import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [userName, setUserName] = useState('')
  const [sidebar, setSidebar] = useState(false)
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='Navbar'>
      <div className='NavTitle'>
        <Link to="/" className="NavTitleLink" >
          {/* <img style={{ width: '1.5rem', borderRadius: '1rem' }} src={require("../assets/images/prime_logo.jpg")} alt="" /> */}
          {isMobile ? <><i class="fa-solid fa-house-flood-water"></i>  Water Extremes Research Group</>
            : <> <i class="fa-solid fa-house-flood-water"></i>  Water Extremes Research Group : Web-Tool for Design Flood </>}
        </Link>
        {userName && !isMobile ? <span className='NavTitleLink'><i class="fa-solid fa-user"></i> {userName}</span> : null}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', backgroundColor: 'var(--secondary)', borderRadius: '16px' }}>
        {!isMobile && <div className='hideOnMobile' style={{ margin: 'auto 0', padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

          <Link to="/" className="NavLink">Home</Link>
          <Link to="/team" className="NavLink">Team</Link>
          <Link to="/project" className='NavLink'>Project</Link>
          <Link to="/outreach" className="NavLink">Outreach</Link>
          <Link to="/publications" className="NavLink">Publications</Link>
          <Link to="https://faculty.iitr.ac.in/~vinnarasi/" target='_blank' className='NavLink' >Research Group</Link>
          <Link to="/contact" className="NavLink">Help</Link>
          {/* <Link to="/graph" className="NavLink">Graph</Link> */}
        </div>}
        {isMobile && <div className='showOnMobile' style={{ margin: 'auto 0', padding: '0 10px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} onClick={() => setSidebar(!sidebar)}><i class="fa-solid fa-bars"></i></div>}
        <div>
          {userName ?
            <button onClick={handleLogout} className='btn btn-link text-danger' style={{ marginRight: 'auto', textDecoration: 'none', fontWeight: '500' }}> <i class="fa-solid fa-right-from-bracket"></i> LogOut</button>
            : <button onClick={() => navigate('/login')} className='btn btn-link text-success' style={{ marginRight: 'auto', textDecoration: 'none', fontWeight: '500' }}> <i class="fa-solid fa-right-to-bracket"></i> Login</button>
          }
        </div>
        {sidebar && isMobile ? <div className="sideNavbar showOnMobile">
          <div className='showOnMobile' style={{ position: 'absolute', top: 10, left: 10 }} onClick={() => setSidebar(!sidebar)}><i class="fa-solid fa-xmark"></i></div>
          <div className="sideNavlink">
            <span className='NavTitleLink'><i class="fa-solid fa-user"></i> {userName}</span>
          </div>
          <div className='sideNavlink' >
            <Link to="/" className="NavLink linkcolor">Home</Link>
          </div>
          <div className='sideNavlink' >
            <Link to="/team" className="NavLink linkcolor">Team</Link> <br />
          </div>
          <div className='sideNavlink' >
            <Link to="/project" className='NavLink linkcolor'>Project</Link> <br />
          </div>
          <div className='sideNavlink' >
            <Link to="/outreach" className="NavLink linkcolor">Outreach</Link>
          </div>
          <div className='sideNavlink' >
            <Link to="/publications" className="NavLink linkcolor">Publications</Link>
          </div>
          <div className='sideNavlink' >
            <Link to="https://faculty.iitr.ac.in/~vinnarasi/" target='_blank' className='NavLink linkcolor' >Research Group</Link>
          </div>
          <div className='sideNavlink' >
            <Link to="/contact" className="NavLink linkcolor">Help</Link>
          </div>
        </div> : null}
      </div>

    </div>
  )
}
