import axios from "axios"
import 'dotenv/config'
const NODE_ENV = process.env.NODE_ENV
const URI = NODE_ENV === 'development' ? "http://localhost:4000/api" : "/api"
const responseArtists = await axios.get(URI + '/artists')
const responseSongs = await axios.get(URI + '/songs')
export const artistArray = responseArtists.data
export const songsArray = responseSongs.data