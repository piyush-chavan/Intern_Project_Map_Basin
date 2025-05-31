import React from 'react'

export default function DevTemplate({ data }) {
    return (
        <div>
            <div className="memberbox" style={{ height: '420px' }}>
                <div className='memimgbox' >

                    <img className='memberimg' src={process.env.PUBLIC_URL+data.src} alt="" />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '18px', fontWeight: '500' }}>{data.name}</p>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: 'purple' }}>{data.designation}</p>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: 'green' }} >{data.description}</p>
                    <p style={{ textAlign: 'center' }}>

                        <a href={data.links[0]} target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: 'black' }}><i class="fa-brands fa-square-github"></i></a>
                        <a href={data.links[1]} target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#0077B5' }}><i class="fa-brands fa-linkedin"></i></a>
                    </p>


                </div>
            </div>

        </div>
    )
}
