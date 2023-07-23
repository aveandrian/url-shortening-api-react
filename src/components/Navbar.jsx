import { useState } from 'react'
import '../styles/Navbar.css'
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }
    return (
        <nav>
            <img className='logo' src='/images/logo.svg' alt='Logo' />
            <div className={`nav-items ${isOpen  ? "opened" : ""}`}>
                <a>Features</a>
                <a>Pricing</a>
                <a>Resources</a>
                <div className='nav-items-divider'></div>
                <a className='login-btn'>Login</a>
                <button className='signup-btn'>Sign Up</button>
            </div>
            <FontAwesomeIcon 
                icon={isOpen ? faClose : faBars} 
                className='menu-btn'
                onClick={toggleIsOpen}
            />
        </nav>
    )
}