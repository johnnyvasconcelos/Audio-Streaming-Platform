import React from 'react'
import ItemsArea from './ItemsArea.jsx'
import TitleControls from './TitleControls.jsx'
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';
const path = location.pathname;
const Main = ({type}) => {
  return (
    <>
    {/* Artistas */}
          {type ==='artists' || type === 'home' ? (
            <>
                <section className={path === '/' && type === 'home' ? 'main section container space flex column' : 'main section container space-page flex column'}>
                  <TitleControls title="Artistas Populares" path="/artists" />
                  <div className="items">
                  <ItemsArea items={5} title="artista" itemsArray ={artistArray} pathId="/artist" />
                  </div>
              </section>
            </>
            ) : <></>}
    {/* Músicas */}
        {type === 'songs' || type === 'home' ? (
          <>
          <section className={path === '/' && type === 'home' ? 'main section container space-min flex column' : 'main section container space-page flex column'}>
          <TitleControls title="Músicas Populares" path="/songs" />
          <div className="items">
          <ItemsArea items={10} title="musica" itemsArray={songsArray} pathId="/song" />
          </div>
          </section>
          </>
          ) : <></>}
    </>
  )
}
export default Main