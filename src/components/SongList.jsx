import React from 'react'
import SongItem from '../components/SongItem'
const SongList = ({songs}) => {
  let items = 5;
  return (
    <>
        <div className="song__list">

            {songs.filter((current, id) => id < items).map((currentSong, index) => <SongItem {...currentSong} key={index} index={index} /> )}
            <p className="see-more">Ver Mais</p>
        </div>
    </>
  )
}
export default SongList