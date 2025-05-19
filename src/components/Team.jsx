import React from 'react'
import Footer from './Footer'
import './styles.css'

export default function Team() {
    return (
        <div>
            <div>
                <br />
                <div>
                    <p className='title_2'>Core Team</p>
                    <div style={{display:'flex',justifyContent:'space-evenly',padding:'30px 5%'}}>
                        <div className="memberbox"></div>
                        <div className="memberbox"></div>
                        <div className="memberbox"></div>
                        <div className="memberbox"></div>
                    </div>
                </div>
                <br />
                <div>
                    <p className='title_2' >Development Team</p>
                    <div style={{display:'flex',justifyContent:'space-evenly',padding:'30px 5%'}} >
                        <div className="memberbox"></div>
                        <div className="memberbox"></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
