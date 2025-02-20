import React from 'react'
import { songsArray } from '../assets/database/songs'
import Player from '../components/Player.jsx'
import { useParams } from 'react-router-dom'
const Song = () => {
  const { id } = useParams();
  const songIndex = songsArray.findIndex((song) => song._id === id);
  const songObj = songsArray[songIndex];
  
  return (
    <>
      <section className="song__item flex column">
        <div className="container">
          <img src={`/src/assets/images/albums/${songObj.image}.webp`} alt={`capa música ${songObj.name}`} />
        </div>
        < Player />
      </section>
    </>
  );
}
export default Song;