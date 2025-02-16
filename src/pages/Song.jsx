import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Song = () => {
  return (
    <>
      <section className="song__item flex column">
        <div className="container">
          <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="capa album tal"/>
        </div>
        <div class="flex play__details">
          <Link to="/artist/1" className="song__album">
            <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="capa album tal"/>
          </Link>
          <div className="player flex column">
              <div className="buttons flex">
                <Link to="/song/2" className="prev">
                  <FontAwesomeIcon icon={faBackward} />
                </Link>
                <span className="play">
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <Link to="/song/3" className="next">
                  <FontAwesomeIcon icon={faForward} />
                </Link>
              </div>
              <div className="bar__progress flex">
                <span className="music__initial">00:00</span>
                <div className="bar"></div>
                <span className="music__time">02:30</span>
              </div>
          </div>
          <div class="song__name">
            <h3>song name</h3>
            <h4>author name</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Song