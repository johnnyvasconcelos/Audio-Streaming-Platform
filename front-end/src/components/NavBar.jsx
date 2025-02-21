import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/images/logo.webp';
import logoPurple from '/src/assets/images/logo-purple.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    const location = useLocation();
    const path = location.pathname;
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function showMenuFunction() {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`top__bar ${scrolled ? 'scrolled' : ''}`}>
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
                <div className="top__mobile--button" onClick={showMenuFunction}>
                    { showMenu ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} /> }
                </div>
            </div>
            <ul className={showMenu ? `top__menu--mobile container active-menu` : `top__menu--mobile container`}>
                <img src={logoPurple} alt="Audio Streaming Platform - Logo." />
                <li className="top__menu--item">
                    <Link className={path === '/' ? "top__menu--link active" : 'top__menu--link'} to="/" onClick={showMenuFunction}>Home</Link>
                </li>
                <li className="top__menu--item">
                    <Link className={path === '/about' ? "top__menu--link active" : 'top__menu--link'} to="/about" onClick={showMenuFunction}>About</Link>
                </li>
                <li className="top__menu--item">
                    <Link className={path === '/songs' ? "top__menu--link active" : 'top__menu--link'} to="/songs" onClick={showMenuFunction}>Singles</Link>
                </li>
                <li className="top__menu--item">
                    <Link className={path === '/artists' ? "top__menu--link active" : 'top__menu--link'} to="/artists" onClick={showMenuFunction}>Artists</Link>
                </li>
                <li className="top__menu--item">
                    <Link className={path === '/plans' ? "top__menu--link active" : 'top__menu--link'} to="/plans" onClick={showMenuFunction}>Plans</Link>
                </li>
                <div className="top__menu--item">
                    <a href="https://github.com/johnnyvasconcelos/Audio-Streaming-Platform" target="_blank" className="top__menu--link">GitHub</a>
                </div>
                <p className="top__menu--footer">Audio Streaming Platform</p>
            </ul>
        </nav>
    );
};
export default NavBar;