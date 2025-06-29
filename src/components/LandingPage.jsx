import React, { useEffect } from 'react'
import './styles.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import FloodText from './FloodText';

export default function LandingPage() {
    // const waveWidth=1400;
    const navigate = useNavigate();
    useEffect(() => {
        // Manually trigger Bootstrap carousel
        const carouselEl = document.querySelector('#carouselExampleCaptions');
        if (carouselEl) {
            new window.bootstrap.Carousel(carouselEl, {
                interval: 8000, // 8 seconds
                ride: 'carousel',
                pause: false    // Don't pause on hover
            });
        }
    }, []);
    return (
        <>
            <div className='landingPageContainer'>
                <FloodText />
                {/* <p className='wave-text' style={{ fontWeight: '500' }}>Web-Tool for Design Flood</p> */}
                <p className='normalText' style={{ color: 'var(--secondary)', borderBottom: '2px solid black', paddingBottom: '20px', fontWeight: '500' }}> A publicly accessible web-based tool provides design flood characteristics, including peak flow, flood volume, and flood duration, for both stationary and non-stationary conditions across India. It offers univariate and bivariate return level estimates for historical and future climate scenarios. Users can select specific streamflow gauging stations within various Indian river basins to view return level data. By using the tool, users agree to its Terms of Use.</p>
                {/* <hr /> */}


                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', border: '2px solid black', borderRadius: '20px', padding: '20px' }}>
                    {/* <div style={{ width: 'max(100%,360px)', maxWidth: '100%', paddingTop: '10px',margin:'auto' }}>
                            <div style={{boxShadow:'0 0 10px grey',borderRadius:'20px'}} id="carouselExampleCaptions" class="carousel slide" >
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>

                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/1.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/2.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/3.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/4.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/5.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/6.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/7.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ borderRadius: '20px' }} src={require('../assets/images/flood/8.png')} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        <br />
                        <a style={{ color: "black" }} href="https://floodlist.com/tag/india" target='_blank'><i class="fa-solid fa-square-arrow-up-right"></i> Source/Credit : https://floodlist.com/tag/india </a>
                        <br /> <br />*/}
                    <div style={{ width: 'min(800px,100%)', borderRadius: '5px' }}>
                        <iframe width="100%" height="400px" style={{ border: '2px solid black', padding: 0, borderRadius: '5px' }} src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=4&overlay=temp&product=ecmwf&level=surface&lat=23.166&lon=81.205" frameborder="0"></iframe>
                        <a style={{ color: "black" }} href="https://www.windy.com/-Temperature-temp?temp,23.725,78.776,5" target='_blank'><i class="fa-solid fa-square-arrow-up-right"></i> Source/Credit : windy.com </a>
                    </div>
                    <div style={{ width: 'min(400px,100%)' }}>
                        <p className='normalText' style={{ paddingBottom: '10px', fontWeight: '500',textAlign:'justify' }}>Currently Historical Data for design flood is available,
                            Design flood charecterstices for Future Climate Scenario is under working.<hr />  <span style={{color:'purple'}}>Sign up using your google account to explore further.</span> <br /> <hr /> You can see interactive plots for different charecterstics of design flood for stations present (both basin wise & state wise sorted), <b> Univariate(stationary & non-stationary) and Bivariate(or & and).</b> <br /> <hr /> <span style={{color:'var(--primary)'}}>Click explore below , sign up and check out plots.</span> </p>
                        <button onClick={() => navigate('/explore')} className='btn btn-dark'><i class="fa-solid fa-square-arrow-up-right"></i> Explore</button>

                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}
