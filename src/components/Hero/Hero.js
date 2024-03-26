import React from 'react'
import Discuss from '../images/button.png'
import Big from '../images/image.png'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='middle'>
        <div className='bigimage'>
            <div className='text'>
                <p className='hi'> Hi there,</p>
                <h1 className='assistance'><span>LUXE</span> IS HERE TO BE YOUR ASSISTANCE</h1>
                <p>I am here ready to help you in making creative digital products</p>
            </div>
            <img src={Discuss} alt='discuss'/> 
        </div>
        <div className='big'>
            <img src={Big} alt='big'/>
        </div>
    </div>
  )
}

export default Hero