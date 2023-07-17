import React from 'react'
import './Home.css'

import offerimg from '../image/offerimg.png'
import img1 from '../image/img1.png'
import img2 from '../image/img2.png'
import { Link } from 'react-router-dom'
// import img3 from '../image/img3.png'

const Home = () => {
  return (
    <div>
      
         
        <div>
            <div className='mainDiv flex justify-center '  ><img src={offerimg} className='mainimage' alt='offer'/>
            </div>
            <div className='mainDiv flex justify-center '>
           <img src={img1} className='mainimage' alt='offer'/>
                                
            
            </div>
            <div className='mainDiv flex justify-center '>
            <img src={img2} className='mainimage' alt='offer'/>
            </div>
            {/* <img src={img3} className='mainimage' alt='offer'/> */}


            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Home