import axios from "axios"
const URI = "https://audio-streaming-platform.onrender.com/api"
const responseArtists = await axios.get(URI + '/artists')
const responseSongs = await axios.get(URI + '/songs')
console.log(responseArtists)
export const artistArray = responseArtists.data
export const songsArray = responseSongs.data