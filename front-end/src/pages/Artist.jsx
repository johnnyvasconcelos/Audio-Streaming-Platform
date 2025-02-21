import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import SongList from '../components/SongList.jsx';
import { Link, useParams } from 'react-router-dom';
import { artistArray } from '../assets/database/artists.js';
import { songsArray } from '../assets/database/songs.js';
const Artist = () => {
  const { id } = useParams();
  const [artId, setArtId] = useState(null);
  const [songsArtist, setSongsArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchArtistData = async () => {
      const artist = artistArray.filter((currentArtist) => currentArtist._id === id)[0];
      if (artist) {
        setArtId(artist);
        const songs = songsArray.filter((currentSong) => currentSong.artist === artist.name);
        setSongsArtist(songs);
      } else {
        console.error('Artista não encontrado');
      }
      setIsLoading(false);
    };
    fetchArtistData();
  }, [id]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!artId) {
    return <div>Artista não encontrado</div>;
  }
  const randomIndex = Math.floor(Math.random() * (songsArtist.length - 1));
  const randomId = songsArtist[randomIndex]._id;
  return (
    <section className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `url('/${artId.banner} Banner.webp'),
            linear-gradient(to bottom, var(--Dark), var(--DarkBlue), var(--DarkPurple))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 className="artist__title">{artId.name}</h1>
        </div>
      </div>
      <div className="artist__body space-page container">
        <h2>Popular</h2>
        <SongList songs={songsArtist} />
      </div>
      <Link to={`/song/${randomId}`}>
        <FontAwesomeIcon icon={faCirclePlay} className="music__item--icon music-item__icon--artist" />
      </Link>
    </section>
  );
};
export default Artist;