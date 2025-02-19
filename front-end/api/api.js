import axios from "axios"

const URI = "http://localhost:4000"

const responseArtists = await axios.get(URI + '/artists')
const responseSongs = await axios.get(URI + '/songs')
export const artistArray = responseArtists.data
export const songsArray = responseSongs.data