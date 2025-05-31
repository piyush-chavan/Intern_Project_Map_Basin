import React from 'react'

export default function Member_template({ data }) {
    return (
        <div>
            <div className="memberbox">
                <div className='memimgbox' >

                    <img className='memberimg' src={process.env.PUBLIC_URL+data.src} alt="" />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '18px', fontWeight: '500' }}>{data.name}</p>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: 'purple' }}>{data.designation}</p>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: 'green' }} >{data.description}</p>

                </div>
            </div>

        </div>
    )
}
