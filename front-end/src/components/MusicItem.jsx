import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const MusicItem = ({_id, name, image, banner, artist, pathId}) => {
  return (
                <>
                  <Link to={`${pathId}/${_id}`} className="music__item item">
                    <div className="image__item">
                      <img src={artist ? `/src/assets/images/albums/${image}.webp` : `/src/assets/images/artists/${image}.webp`} alt={artist ? `Capa Álbum ${name} de ${artist}` : `Artista ${name}`} />
                      <FontAwesomeIcon icon={faCirclePlay} />
                    </div>
                    <div className="text__item">
                      <h3>{name}</h3>
                      <h3>{artist ?? "Artist"}</h3>
                    </div>
                  </Link>
                </>
  )
}

export default MusicItem