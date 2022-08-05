import React from 'react';
import "./header.css?1234"
import { Link } from 'react-router-dom'

import '../../media.css?123'

const Header = () => {
    const openMenu = () => {
        document.querySelector('nav').classList.toggle('close')
    }

    const skipToStart = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const skipToEnd = () => {
        window.scrollTo({
            top: 10000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <header>
            <div id='header_wrapper' className="header_wrapper">
                <div className="header__section">
                    <div onClick={openMenu} className="header__item burgericon">
                        <img id='header' className='burger_icon' src="phemptiness.github.io/images/burger-bar.png" alt="burger bar"></img>
                    </div>
                    <div className="header__item headerlogo">
                        PH EMPTINESS
                    </div>
                </div>
                <div className="header__section nav">
                    <div onClick={skipToStart} className="header__item headerButton"><div className="headerlinks" id='navlink1_pc'><Link to='/'>ГЛАВНАЯ</Link></div></div>
                    <div className="header__item headerButton"><div className="headerlinks"><Link to='works'>МОИ РАБОТЫ</Link></div></div>
                    <div onClick={skipToEnd} className="header__item headerButton"><div className="headerlinks" id='navlink3_pc'><Link to='/'>КОНТАКТ</Link></div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
