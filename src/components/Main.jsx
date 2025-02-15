import React from 'react'
import ItemsArea from './ItemsArea.jsx'
import TitleControls from './TitleControls.jsx'
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';
const Main = () => {
  return (
    <>
    {/* Artistas */}
    <section className="main section space container flex column">
        <TitleControls title="Artistas Populares" path="/artists" />
        <div className="items">
          <ItemsArea items={5} title="artista" itemsArray={artistArray} pathId="artist" />
        </div>
    </section>
    {/* Músicas */}
    <section className="main space-min section container flex column">
        <TitleControls title="Músicas Populares" path="/songs" />
        <div className="items">
          <ItemsArea items={10} title="musica" itemsArray={songsArray} pathId="/song" />
        </div>
    </section>
    </>
  )
}
export default Main