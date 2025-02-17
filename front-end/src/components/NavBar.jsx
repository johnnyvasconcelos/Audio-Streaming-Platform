import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/images/logo.webp';
const NavBar = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <nav className="top__bar">
            <div className="top__container container flex">
                <Link className="top__logo" to="/">
                    <img src={logo} alt="Audio Streaming Platform - Logo." />
                </Link>
                <ul className="top__menu">
                    <li className="top__menu--item">
                        <Link className={path === '/' ? "top__menu--link active" : 'top__menu--link'} to="/">Home</Link>
                    </li>
                    <li className="top__menu--item">
                        <Link className={path === '/about' ? "top__menu--link active" : 'top__menu--link'} to="/about">About</Link>
                    </li>
                    <li className="top__menu--item">
                        <Link className={path === '/songs' ? "top__menu--link active" : 'top__menu--link'} to="/songs">Singles</Link>
                    </li>
                    <li className="top__menu--item">
                        <Link className={path === '/artists' ? "top__menu--link active" : 'top__menu--link'} to="/artists">Artists</Link>
                    </li>
                    <li className="top__menu--item">
                        <Link className={path === '/plans' ? "top__menu--link active" : 'top__menu--link'} to="/plans">Plans</Link>
                    </li>
                </ul>
                <div className="flex end">
                    <a className="btn top__btn white" href="https://github.com/johnnyvasconcelos/Audio-Streaming-Platform" target="_blank">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
