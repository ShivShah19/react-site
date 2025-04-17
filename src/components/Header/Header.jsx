import React, { useState } from "react";
import arrowDown from '../../assets/Icon ionic-ios-arrow-down.svg';
import searchIcon from '../../assets/Icon material-search.svg';
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">LOGO</div>

                {/* Hamburger Icon */}
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Menu Items */}
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul className="menu">
                        <li className="menu-item">
                            <span>Qualifications</span>
                            <span className="arrowdown"><img src={arrowDown} alt="arrowDown" /></span>
                        </li>
                        <li className="menu-item">
                            <span>Organizations</span>
                            <span className="arrowdown"><img src={arrowDown} alt="arrowDown" /></span>
                        </li>
                        <li className="menu-item">
                            <span>Research & Analysis</span>
                            <span className="arrowdown"><img src={arrowDown} alt="arrowDown" /></span>
                        </li>
                        <li className="menu-item">
                            <span>Lorem ipsum</span>
                            <span className="arrowdown"><img src={arrowDown} alt="arrowDown" /></span>
                        </li>
                        <li className="menu-item">
                            <span>Lorem ipsum</span>
                            <span className="arrowdown"><img src={arrowDown} alt="arrowDown" /></span>
                        </li>
                    </ul>
                    <div className="right-icons">
                        <div className="search-icon"><img src={searchIcon} alt="searchIcon" /></div>
                        <button className="enrolment-btn">Enrolment</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
