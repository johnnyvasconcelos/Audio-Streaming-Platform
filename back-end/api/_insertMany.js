import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { db } from './connect.js'
const newArtistArray = artistArray.map((artist) => {
    const newArtistObj = { ...artist}
    delete newArtistObj.id
    return newArtistObj
})

const newSongArray = songsArray.map((song) => {
    const newSongObj = { ...song}
    delete newSongObj.id
    return newSongObj
})

const responseSong = await db.collection('songs').insertMany(newSongArray)
const responseArtist = await db.collection('artists').insertMany(newArtistArray)