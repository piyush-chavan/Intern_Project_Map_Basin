import React from 'react'
import './styles.css'

export default function Footer() {
    return (
        <div>
            <div className='devContainer'>
                <br />
                <p className='title_2'>Developed By</p>
                <div className='devBox'>
                    <div className='imgBox'>
                        <img src={require("../assets/logos/iitr_175yrs_logo.png")} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className='imgBox'>
                        <img src={require("../assets/logos/nrf_logo.png")} alt="" style={{ maxWidth: '50%' }} />
                    </div>
                </div>
            </div>
            <div className='footContainer' style={{ width: '100%', padding: '30px 5%', backgroundColor: 'var(--primary)', textAlign: 'start' }}>
                <p className='title_2' style={{ fontSize: '1.5rem' }}>
                    {/* <img style={{ width: '1.5rem', borderRadius: '1rem' }} src={require("../assets/images/prime_logo.jpg")} alt="" /> */}
                    <i class="fa-solid fa-house-flood-water"></i> Water Extremes Research Group : Web Tool for Design Flood</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                    <div style={{ minWidth: 'min(600px,100%)', display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' }}>
                        <div>
                            <p className='title_2'> <i class="fa-solid fa-location-dot"></i> Address</p>
                            <p className='secondaryText'>Room No. 228 <br />
                                Department of Civil Engineering <br />
                                Indian Institute of Technology, Roorkee <br />
                                Roorkee-247667 Distt: Haridwar <br />
                                Uttarakhand, INDIA</p>
                        </div>
                        {/* <br /> */}
                        <div>

                            <p className='title_2'> <i class="fa-solid fa-phone"></i> Contact</p>
                            <p className='secondaryText' style={{ textAlign: 'start' }}>
                                (O) 91-1332-284951 <br />
                                (R) +91-1332-286951 (IP) <br />
                                <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in
                            </p>
                        </div>
                    </div>
                    <div style={{ width: 'min(600px,100%)' }}>
                        <img style={{ maxWidth: '100%', borderRadius: '20px', boxShadow: '0 0 10px grey' }} src={require("../assets/images/ce_iitr.jpg")} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
