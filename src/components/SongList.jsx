import React from 'react'
import SongItem from '../components/SongItem'
import { useState } from 'react'
const SongList = ({songs}) => {
  let [items, setItems] = useState(5);
  return (
    <>
        <div className="song__list">
            {songs.filter((current, id) => id < items).map((currentSong, index) => <SongItem {...currentSong} key={index} index={index} /> )}
            <p className="see-more" onClick={() => {
              setItems(items + 5)
            }}>Ver Mais</p>
        </div>
    </>
  )
}
export default SongList