import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import './Button'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    
    // Click Toggle
    const handleMenuClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    // Decide to show button depending on screen width
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // Remove button render on startup
    useEffect(() => {
        showButton();
    },[])

    // Window resize event listener
    window.addEventListener('resize', showButton)

  return (
    <>
        <nav className='navbar'>
            <div className ='navbar-container'>
                <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}> 
                    <img src={require('../assets/logo.png')} alt='Royal Caribbean Cruises' title='Royal Caribbean Cruises' width={160} height={41}></img>
                </Link>
                <div className='menu-icon' onClick={handleMenuClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                        <Link to='/Cruises' className='nav-links' onClick={closeMobileMenu}>
                            CRUISES
                        </Link> 
                    </li>
                <li className='nav-item'> 
                        <Link to='/Destinations' className='nav-links' onClick={closeMobileMenu}>
                            DESTINATIONS
                        </Link> 
                    </li>
                    <li className='nav-item'> 
                        <Link to='/Ships' className='nav-links' onClick={closeMobileMenu}>
                            SHIPS
                        </Link> 
                    </li>
                    <li className='nav-item'> 
                        <Link to='/Planner' className='nav-links' onClick={closeMobileMenu}>
                            TRIP PLANNER
                        </Link> 
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar