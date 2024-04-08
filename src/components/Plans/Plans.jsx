import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'


const Plans = () => {
  return (
    <div className="Plans-h" id="plans-h">
        <div className="plans-header">
            <span className='stroke-text3'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text3'>Now with us</span>    
        </div>  
    
        {/*plans card */}
        <div className="plans">
             {plansData.map((plan, i)=>(
                <div className="plan">
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}> {feature}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>See more benefits -&gt; </span></div>

                    <button className="btn">Join Now</button>
                </div>
             ))}
        </div>


    </div>
  )
}

export default Plans