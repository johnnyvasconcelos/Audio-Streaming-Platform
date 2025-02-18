import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
const Song = () => {
  const {id} = useParams()
  const {image, name, duration, artist, audio, index} = songsArray.filter(
    (current) => current._id === id
  )[0]
  const artistOb = artistArray.filter(
    (currentArt) => currentArt.name === artist
  )[0]
  const songObj = songsArray.filter(currentSong => currentSong._id === id)
  return (
    <>
      <section className="song__item flex column">
        <div className="container">
          <img src={image} alt={`capa música ${name}`}/>
        </div>
        <div className="flex play__details">
          <Link to={`/artist/${artistOb._id}`} className="song__album">
            <img src={artistOb.image} alt={artistOb.name}/>
          </Link>
          <div className="player flex column">
              <div className="buttons flex">
                <Link to={`/song/${songObj[0].id - 1}`} className="prev">
                  <FontAwesomeIcon icon={faBackward} />
                </Link>
                <span className="play">
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <Link to={`/song/${songObj[0].id + 1}`} className="next">
                  <FontAwesomeIcon icon={faForward} />
                </Link>
              </div>
              <div className="bar__progress flex">
                <span className="music__initial">00:00</span>
                <div className="bar"></div>
                <span className="music__time">{duration}</span>
              </div>
          </div>
          <div clasName="song__name">
            <h3>{name}</h3>
            <h4>{artist}</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Song