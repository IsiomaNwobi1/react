import React from 'react'
import Luxe from '../images/Luxe.png'
import Menu from '../images/Menu.png'
import "./Header.css"

const Header = () => {
  return (
    <nav className='top'>   
        <div className='luxe'>
            <img src={Luxe} alt='luxe'/>
        </div>
        <div className='details'>
            <div>
                <li>Home</li>
                <li>Services</li>
                <li>Portforlio</li>
                <li>How We Work</li>
            </div>
        </div>
        <div className='menu'>
            <img src={Menu} alt='menu'/>

        </div>
    </nav>
  )
}

export default Header