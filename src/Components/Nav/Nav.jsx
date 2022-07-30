import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

import '../../media.css'

const Nav = () => {
    const skipToStart = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        document.querySelector('nav').classList.add('close')
    }

    const skipToEnd = () => {
        window.scrollTo({
            top: 10000,
            left: 0,
            behavior: "smooth"
        })
        document.querySelector('nav').classList.add('close')
    }

    return (
        <nav className="close">
            <div className="nav_wrapper">
                <div onClick={skipToStart} className="nav__item navButton"><div className="navlinks" id='navlink1'><Link style={{ color: 'white' }} to='/'>ГЛАВНАЯ</Link></div></div>
                <div onClick={skipToStart} className="nav__item navButton"><div className="navlinks"><Link style={{ color: 'white' }} to='/works'>МОИ РАБОТЫ</Link></div></div>
                <div onClick={skipToEnd} className="nav__item navButton"><div className="navlinks" id='navlink3' href="#"><Link style={{ color: 'white' }} to='/'>КОНТАКТ</Link></div></div>
            </div>
        </nav>
    );
}

export default Nav;
