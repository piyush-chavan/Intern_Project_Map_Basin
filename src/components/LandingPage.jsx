import React from 'react'
import './styles.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className='landingPageContainer'>
                <p className='title' style={{ fontWeight: '500' }}>Web-Tool for Design Flood</p>
                <p className='normalText' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '2px solid black', paddingBottom: '20px' }}> A publicly accessible web-based tool provides design flood characteristics, including peak flow, flood volume, and flood duration, for both stationary and non-stationary conditions across India. It offers univariate and bivariate return level estimates for historical and future climate scenarios. Users can select specific streamflow gauging stations within various Indian river basins to view return level data. By using the tool, users agree to its Terms of Use.</p>
                {/* <hr /> */}

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', border: '2px solid black', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ width: 'max(30%,360px)', maxWidth: '100%' }}>
                        <p className='normalText' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}> A publicly accessible web-based tool provides design flood characteristics, including peak flow, flood volume, and flood duration, for both stationary and non-stationary conditions across India. It offers univariate and bivariate return level estimates for historical and future climate scenarios. Users can select specific streamflow gauging stations within various Indian river basins to view return level data. By using the tool, users agree to its Terms of Use.</p>
                        <button onClick={() => navigate('/explore')} className='btn btn-dark'><i class="fa-solid fa-square-arrow-up-right"></i> Explore</button>

                    </div>
                    <div style={{ width: 'max(60%,360px)', maxWidth: '100%', paddingTop: '10px' }}>
                        <img src={require('../assets/images/img4.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                        <br /> <br />
                        <img src={require('../assets/images/img5.png')} alt="" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', borderRadius: '20px' }} />
                        <br />
                        <a style={{color:"black"}} href="https://floodlist.com/tag/india" target='_blank'>Source/Credit : https://floodlist.com/tag/india </a>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}
