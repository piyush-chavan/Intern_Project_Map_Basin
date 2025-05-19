import React from 'react'
import Footer from './Footer'
import './styles.css'

export default function Outreach() {
  return (
    <div>
      <p className='title_2'>Outreach</p>
      <div style={{ margin: '30px 10%' }}>

        <p className='title_2' style={{ textAlign: 'start' }}>Knowledge Transfer Session under Scientific Social Responsibility (SSR) Scheme  </p>
        <p className='normalText' style={{ color: 'red',fontWeight:'500' }}>Session 1: Methodist Girls Inter College Roorkee.</p>
        <p className='normalText'>
          As a part of the ANRF-sponsored project <b style={{color:'purple'}}>“Design flood estimation for resilient hydraulic structures under changing climate and environment” </b>, a Knowledge Transfer Session under Scientific Social Responsibility (SSR) Scheme was organized at the <b style={{color:'purple'}}> Methodist Girls Inter College, Roorkee was conducted on 20th May 2025.</b><br></br>
          This session involved knowledge transfer to the students of class 8th (45 students) on the concepts of <b style={{color:'purple'}}>climate change, precipitation extremes, various types of floods, rain rainwater harvesting techniques.</b> A quiz competition was also conducted to evaluate the understanding of the concepts delivered, prizes were distributed to 6 students.

        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', border: '2px solid', borderRadius: "20px", padding: '20px' }}>
          <div style={{ width: '40%' }}>

            <img style={{ maxWidth: '100%', borderRadius: '20px' }} src={require('../assets/images/outreach_1.jpg')} alt="" />
            <p className='secondaryText' style={{ textAlign: 'center', marginTop: '10px' }}>Prize distribution for the winners of the quiz competition</p>
          </div>
          <div style={{ width: '40%' }}>

            <img style={{ maxWidth: '100%', borderRadius: '20px' }} src={require("../assets/images/outreach_2.jpg")} alt="" />
            <p className='secondaryText' style={{ textAlign: 'center', marginTop: '10px' }}>Students and Teachers with the IITR team.</p>
          </div>
        </div>

        <br /><br />
        <p className='title_2' style={{ textAlign: 'start', color: 'red' }} >Upcoming Events </p>
        <p className='normalText'><b >Session 2: 20th May 2025<br></br>
          SAFE 2025: Strategies for Adaptive Flood Estimation</b><br></br>
          The Department of Civil Engineering at IIT Roorkee is delighted to extend a warm invitation to an ANRF-sponsored one-day workshop titled <b>“SAFE: Strategies for Adaptive Flood Estimation”.</b> This insightful event is scheduled for <b>Tuesday, May 20, 2025, from 09:30 AM to 05:00 PM </b>at the Department of Civil Engineering, IIT Roorkee.
        </p>
        <br /><br />
        <p className='title_2' style={{ textAlign: 'start' }}  >About the Workshop</p>
        <p className='normalText'>
          As climate change and environmental shifts continue to impact hydrological systems, the design of resilient hydraulic structures demands innovative approaches to flood estimation. This workshop aims to equip participants with cutting-edge knowledge and tools to address the challenges of non-stationarity, uncertainty, and evolving flood characteristics in a changing world. Through expert-led sessions, interactive discussions, and practical insights, we will explore methodologies to enhance the resilience of hydraulic infrastructure.<br></br>
        </p>
        <br /><br />
        <p className='title_2' style={{ textAlign: 'start' }}  >Workshop Highlights</p>
        <p className='normalText'>
          &#8226; Understanding Non-Stationarity in Extreme Flow Characteristics: Learn how to account for changing patterns in flood events.<br></br>
          &#8226; Generic Framework for Nonstationary Multivariate Frequency Analysis: Discover advanced techniques for robust flood frequency modelling.<br></br>
          &#8226; Quantifying and Reducing Uncertainty in Design Flood Estimation: Gain strategies to improve the reliability of flood predictions.<br></br>
          &#8226; Identifying Potential Covariates for Extreme Flood Characteristics: Explore key factors influencing flood behaviour.<br></br>
          &#8226; Analysing Short-term and Long-term Trends: Examine trends in flood peaks, volumes, and durations to inform sustainable design.<br></br>
        </p>
        <p className='normalText' style={{ color: 'red',fontWeight:'500' }}>Session 3: Adarsh Bal Niketan Senior Secondary School, IIT Roorkee Campus, Roorkee
          On 21st May 2025
        </p>

      </div>
      <Footer />
    </div>
  )
}
