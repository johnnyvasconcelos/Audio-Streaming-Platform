import React from 'react'
import logo from '/src/assets/images/logo.png'
const navbar =  <>
<nav className="top__bar">
    <div className="top__container container flex">
        <a className="top__logo"><img src={logo} alt="Audio Streaming Platform - Logo." /></a>
        <ul className="top__menu">
                <li className="top__menu--item"><a className="top__menu--link active" href="#">Home</a></li>
                <li className="top__menu--item"><a className="top__menu--link" href="#">About</a></li>
                <li className="top__menu--item" href="#"><a className="top__menu--link" href="#">Single</a></li>
                <li className="top__menu--item" href="#"><a className="top__menu--link" href="#">Artists</a></li>
                <li className="top__menu--item"><a className="top__menu--link" href="#">Albums</a></li>
        </ul>
        <div className="flex end">
            <a className="btn top__btn white" href="/">button</a>
        </div>
    </div>
</nav>
</>
const NavBar = () => navbar
export default NavBar