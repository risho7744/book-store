import React from 'react'
import { Breakpoint } from 'react-socks';
import './Banner.css';
import pic_1 from './pic_1.png';

function Banner() {
    return (
            <div id="banner" className="banner">
            
                    <h1>Read & Findout </h1>
                    <p>An everything you need to know field guide to rocking your job,<br></br> 
                        earning your confidence, and leading your team to<br></br> 
                        new horizons and opportunities.</p>
                    <button className='books'>Let's Read</button>
                   
                   
                    <div className="banner_book"><img src={pic_1} alt="Banner_book" /></div>

            </div>

    )
}

export default Banner
