import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const navItems = [
        { name: "Platform", link: "platform" },
        { name: "Developers", link: "developers" },
        { name: "Community", link: "community" },
        { name: "About", link: "about" },
        { name: "Subscribe", link: "subscribe", className: 'btn' },
    ]

    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#00d8ff'}}>DeFi</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link to={item.link} smooth={true} spy={true} offset={-50} duration={500} className={item.className}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar