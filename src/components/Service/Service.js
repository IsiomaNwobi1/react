import React from 'react'
import FirstIcon from '../images/Vector-2.png'
import SecondIcon from '../images/Ui Design.png'
import ThirdIcon from '../images/Vector-3.png'
import "./Service.css"

const Service = () => {
  return (
    <nav className='bottom'>
      <div className='service'>
        <p>OUR SERVICE</p>
        <div className='icons'>
          <div className='firstIcon'>
            <img src={FirstIcon} alt='FirstIcon' />
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='secondIcon'>
            <img src={SecondIcon} alt='SecondIcon' />
            <h2>UI/UX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='thirdIcon'>
            <img src={ThirdIcon} alt='ThirdIcon' />
            <h2>Product Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Service