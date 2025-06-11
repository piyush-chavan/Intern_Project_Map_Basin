import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom';

export default function Explore() {
    const navigate1 = useNavigate();
    const isAuthenticated = localStorage.getItem("user");
        if (!isAuthenticated) {
            return <Navigate to="/login" />
        }
    return (
        <div style={{margin:'10px',padding:'20px'}}>
            <br /> <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <div className='mapCard'>
                    <img src={require('../assets/images/historic_flood.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                    <br /><br />
                    <p className='title_2'>Design Flood for Historical Data</p>
                    <button onClick={() => navigate1('/home')} className='btn btn-dark'>CheckOut</button>
                </div>
                <div className='mapCard'>
                    <img src={require('../assets/images/futuristic_flood.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                    <br /><br />
                    <p className='title_2'>Design Flood for Future Climate</p>
                    <button onClick={() => navigate1('/home')} className='btn btn-dark'>CheckOut</button>
                </div>
            </div>

        </div>
    )
}
