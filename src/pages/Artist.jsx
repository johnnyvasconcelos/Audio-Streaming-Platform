import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import SongList from '../components/SongList.jsx'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists.js'
import { songsArray } from '../assets/database/songs.js'
const Artist = () => {
  const { id } = useParams()
  const artId = artistArray.filter((currentArtist, index) => currentArtist.id === Number(id))[0]
  const songsArtist = songsArray.filter((currentSong, index) => currentSong.artist === artId.name)
  const randomIndex = Math.floor(Math.random() * (songsArray.length - 1))
  const randomId = songsArray[randomIndex].id
  console.log(artId)
  return (
    <>
      <section className="artist">
        <div className="artist__header" style={{
    backgroundImage: `url(${artId.banner}), 
                      linear-gradient(to bottom, var(--Dark), var(--DarkBlue), var(--DarkPurple))`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}}>
          <div className="container">
            <h1 className="artist__title">{artId.name}</h1>
          </div>
        </div>
        <div className="artist__body space-page container">
          <h2>Populares</h2>
          <SongList songs={songsArtist} />
        </div>
        <Link to={`/song/${randomId}`}>
        <FontAwesomeIcon icon={faCirclePlay} className="music__item--icon music-item__icon--artist" />
        </Link>
      </section>
    </>
  )
};
export default Artist