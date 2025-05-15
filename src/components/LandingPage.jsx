import React from 'react'
import './styles.css'

export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            <p className='title'>HydroMetLab</p>
            <p className='normalText'> A Web-based Tool for obtaining the design rainfall from the Intensity-Duration-Frequency Curves over the Indian landmass Web-based IDF curves is a publically available intensity-duration-frequency tool to get the design rainfall of different return periods under the base and future climate periods. The Web-based IDF contains the developed IDF curves for the grid size of 25 km by 25 km covering the entire India. Users can select any grid for the region of interest to know design rainfall having a minimum of 5- year and maximum of 100 - year return period. By accessing any of the options available in this tool you agree with the Terms of Use</p>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='mapCard'>
                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" style={{maxWidth:'100%',borderRadius:'20px'}} />
                    <p className='title_2'>IDF's for historical data</p>
                    <button className='btn btn-dark'>CheckOut</button>
                </div>
                <div className='mapCard'>
                    <img  src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" style={{maxWidth:'100%',borderRadius:'20px'}} />
                    <p className='title_2'>IDF's for Future climate period</p>
                    <button className='btn btn-dark'>CheckOut</button>
                </div>
            </div>

            <div className='devContainer'>
                <p className='title_2'>Developed By</p>
                <div className='devBox'>
                    <div className='imgBox'>
                        <img src="https://hydrometlab.in/static/media/logo2.05b3f848f598990a43fd.png" alt="" style={{maxWidth:'100%'}} />
                    </div>
                    <div className='imgBox'>
                        <img src="https://hydrometlab.in/static/media/nsert.619e044eff2fe89c56ee.png" alt="" style={{maxWidth:'100%'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
