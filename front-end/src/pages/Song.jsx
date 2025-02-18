import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
const Song = () => {
  const { id } = useParams();
  const songIndex = songsArray.findIndex((song) => song._id === id);
  const songObj = songsArray[songIndex];
  const artistOb = artistArray.find((artist) => artist.name === songObj.artist);
  
  return (
    <>
      <section className="song__item flex column">
        <div className="container">
          <img src={`/src/assets/images/albums/${songObj.image}.webp`} alt={`capa música ${songObj.name}`} />
        </div>
        <div className="flex play__details">
          <Link to={`/artist/${artistOb._id}`} className="song__album">
            <img src={`/src/assets/images/artists/${artistOb.image}.webp`} alt={artistOb.name} />
          </Link>
          <div className="player flex column">
            <div className="buttons flex">
              <Link 
                to={songIndex > 0 ? `/song/${songsArray[songIndex - 1]._id}` : '#'} 
                className="prev"
              >
                <FontAwesomeIcon icon={faBackward} />
              </Link>
              <span className="play">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <Link 
                to={songIndex < songsArray.length - 1 ? `/song/${songsArray[songIndex + 1]._id}` : '#'} 
                className="next"
              >
                <FontAwesomeIcon icon={faForward} />
              </Link>
            </div>
            <div className="bar__progress flex">
              <span className="music__initial">00:00</span>
              <div className="bar"></div>
              <span className="music__time">{songObj.duration}</span>
            </div>
          </div>
          <div className="song__name">
            <h3>{songObj.name}</h3>
            <h4>{songObj.artist}</h4>
          </div>
        </div>
      </section>
    </>
  );
}
export default Song;