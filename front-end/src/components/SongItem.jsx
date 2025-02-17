import React from 'react'
import { Link } from 'react-router-dom'
const SongItem = ({image, name, duration, artist, audio, id, index}) => {
  return (
    <div>
       <Link to={`/song/${id}`} className="song__item flex">
            <div className="song__item-album flex start">
                <p>{index + 1}</p>
                <img src={image} alt={`capa imagem música ${name} - ${artist}`} />
                <p className="song__item-name">{name}</p>
            </div>
            <p>{duration}</p>
        </Link>
    </div>
  )
}

export default SongItem