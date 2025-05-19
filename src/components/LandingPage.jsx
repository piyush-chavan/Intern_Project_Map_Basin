import React from 'react'
import './styles.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className='landingPageContainer'>
                <p className='title'>Web-Tool for Design Flood</p>
                <p className='normalText'> A Web-based Tool for obtaining the design rainfall from the Intensity-Duration-Frequency Curves over the Indian landmass Web-based IDF curves is a publically available intensity-duration-frequency tool to get the design rainfall of different return periods under the base and future climate periods. The Web-based IDF contains the developed IDF curves for the grid size of 25 km by 25 km covering the entire India. Users can select any grid for the region of interest to know design rainfall having a minimum of 5- year and maximum of 100 - year return period. By accessing any of the options available in this tool you agree with the Terms of Use</p>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className='mapCard'>
                        <img src={require('../assets/images/historic_flood.png')} alt="" style={{ maxWidth: '100%',height:'400px', borderRadius: '20px' }} />
                        <br /><br />
                        <p className='title_2'>Design Flood for historical data</p>
                        <button onClick={()=>navigate('/home')} className='btn btn-dark'>CheckOut</button>
                    </div>
                    <div className='mapCard'>
                        <img src={require('../assets/images/futuristic_flood.png')} alt="" style={{maxWidth: '100%',height:'400px', borderRadius: '20px' }} />
                        <br /><br />
                        <p className='title_2'>Design Flood for Future climate</p>
                        <button onClick={()=>navigate('/home')} className='btn btn-dark'>CheckOut</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
