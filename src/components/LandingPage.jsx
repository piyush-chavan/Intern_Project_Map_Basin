import React from 'react'
import './styles.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className='landingPageContainer'>
                <p className='title' style={{fontWeight:'500'}}>Web-Tool for Design Flood</p>
                <p className='normalText'> A publicly accessible web-based tool provides design flood characteristics, including peak flow, flood volume, and flood duration, for both stationary and non-stationary conditions across India. It offers univariate and bivariate return level estimates for historical and future climate scenarios. Users can select specific streamflow gauging stations within various Indian river basins to view return level data. By using the tool, users agree to its Terms of Use.</p>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className='mapCard'>
                        <img src={require('../assets/images/historic_flood.png')} alt="" style={{ maxWidth: '100%',height:'400px', borderRadius: '20px' }} />
                        <br /><br />
                        <p className='title_2'>Design Flood for Historical Data</p>
                        <button onClick={()=>navigate('/home')} className='btn btn-dark'>CheckOut</button>
                    </div>
                    <div className='mapCard'>
                        <img src={require('../assets/images/futuristic_flood.png')} alt="" style={{maxWidth: '100%',height:'400px', borderRadius: '20px' }} />
                        <br /><br />
                        <p className='title_2'>Design Flood for Future Climate</p>
                        <button onClick={()=>navigate('/home')} className='btn btn-dark'>CheckOut</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
