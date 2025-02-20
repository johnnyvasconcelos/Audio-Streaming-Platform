import React from 'react';
import ItemsArea from './ItemsArea.jsx';
import TitleControls from './TitleControls.jsx';
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';

const path = location.pathname;

const Main = ({ type }) => {
  return (
    <>
      {/* Carrossel de Artistas */}
      {type === 'artists' || type === 'home' ? (
        <section className={path === '/' && type === 'home' ? 'main section container space flex column' : 'main section container space-page flex column'}>
          <TitleControls title="Popular Singers" path="/artists" carouselId="artistsCarousel" visibleItems={5} totalItems={artistArray.length} />
          <div id="artistsCarousel" className="items" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="items-area" style={{ display: 'flex', transition: 'margin-left 0.3s ease' }}>
              <ItemsArea items={5} title="artista" itemsArray={artistArray} pathId="/artist" />
            </div>
          </div>
        </section>
      ) : null}

      {/* Carrossel de Músicas */}
      {type === 'songs' || type === 'home' ? (
        <section className={path === '/' && type === 'home' ? 'main section container space-min flex column' : 'main section container space-page flex column'}>
          <TitleControls title="Popular Songs" path="/songs" carouselId="songsCarousel" visibleItems={10} totalItems={songsArray.length} />
          <div id="songsCarousel" className="items" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="items-area" style={{ display: 'flex', transition: 'margin-left 0.3s ease' }}>
              <ItemsArea items={10} title="musica" itemsArray={songsArray} pathId="/song" />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Main;

