import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
{/*the best ad*/}
        <div className="the-best-ad">
            <div></div>
            <span>The premier fitness facility in the region</span>
        </div> 
        
{/*Hero heading*/} 
        <div className="hero-text" >
                <div><span className='stroke-text'>Sculpt </span>
                <span>Your</span></div>
                <div><span>
                   Perfect Physique</span></div>
             

        <div>
            <span>In here we'll assist you in crafting and enhancing your ideal physique, 
                empowering you to live life to its fullest potential.
            </span>
            </div>       
        </div>

          {/*figures*/}
        <div className='figures'>
        <div>
            <span>+10</span>
            <span>Expert coachs</span>
        </div> 
        <div>
            <span>+500</span>
            <span>Members joined</span>
        </div>
        <div>
            <span>+1000</span>
            <span>Fitness Programs</span>
        </div> 
    </div> 

{/*hero buttons*/}
    <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn more</button>
    </div>
        
    </div>


        <div className="right-h">
           
            <button className='btn'>Join Now</button>
            
            <div className='heart-rate'>
                <img src={Heart} alt='' />
                <span>Heart Rate</span>
                <span> 116 bpm</span>
            </div>
            
            {/*Hero images*/}
            <img src={hero_image} alt="" className = "hero-image"/>
            <img src={hero_image_back} alt="" className = "hero-image-back"/>

           </div>
    </div>
  )
}

export default Hero