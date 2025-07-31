import React, { useState, useEffect } from "react"
import "../assets/css/header.css"
import { PopupButton } from "react-calendly"
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <header className={`header ${sticky? 'dark-nav' : ''}`}>
                <a href="/" className="logo">Alex Fuller</a>
                <svg className="menu-icon" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M0 96C0 78.3 14.3 
                    64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 
                    14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 
                    17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                <nav id={mobileMenu ? '' : 'hide-mobile-menu'} className="navbar">
                    <AnchorLink offset={() => 100} className="link" href="#about">About</AnchorLink>
                    <AnchorLink offset={() => 100} className="link" href="#services">Services</AnchorLink>
                    <AnchorLink offset={() => 100} className="link" href="#projects">Portfolio</AnchorLink>
                    <PopupButton className="btn"
                        url="https://calendly.com/alexfuller0/30min?hide_gdpr_banner=1"
                        rootElement={document.getElementById("root")}
                        text="Let's Connect!"
                    />
                </nav>
        </header>
    )

    ReactDOM.render(
        <Header />,
        document.getElementById('content')
      )
}

export default Header