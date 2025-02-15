import React from 'react'
import woman from '/src/assets/images/woman.webp'
import wave from '/src/assets/images/wave.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const header = <>
<header className="main__header">
    <div className="container flex">
        <div className="header__text">
            <h1>Audio Streaming Platform</h1>
            <p>Lorem Ipsum Dolor Amet Titilandus.</p>
            <div className="button-container flex start">
                <Link to="/songs" className="btn-header btn">Explore</Link>
                <p className="btn-play"><FontAwesomeIcon icon={faPlay} /></p>
                <span>Play Vídeo</span>
            </div>
        </div>
        <div className="image">
            <img className="woman" src={woman} alt="Woman Music." />
            <img className="wave" src={wave} alt="Wave." />
            <div className="technologys">
                <div className="technology" title="React"><img src="/src/assets/images/react.png" alt="icon react" /></div>
                <div className="technology" title="Node JS"><img src="/src/assets/images/nodejs.png" alt="icon node js" /></div>
                <div className="technology" title="Vite"><img src="/src/assets/images/vite.png" alt="icon vite" /></div>
                <div className="technology" title="MongoDB"><img src="/src/assets/images/mongodb.png" alt="icon mongodb" /></div>
            </div>
        </div>
    </div>
</header>
</>
const Header = () => header
export default Header