import React from 'react'
import logo from '../assets/navbarLogo.png'
import menu from '../assets/menu.svg'

const Navbar = () => {
    return (
        <div>
            <div className='navbar--wrapper'>
                <header>
                    <img className='navbarLogo' alt='Logo' src={logo} />
                    <p className='navbarItems'>Explore</p>
                    <p className='navbarItems'>License</p>
                    <p className='navbarItems'>Upload</p>
                    <button className='navbarButton'>Sign in</button>
                    <button className='toggle'><img alt='menuToggleButton' src={menu} /></button>
                </header>
            </div>
        </div>
    )
}

export default Navbar