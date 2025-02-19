import axios from "axios"
const URI = "http://localhost:4000"
const responseArtists = await axios.get(URI + '/artists')
const responseSongs = await axios.get(URI + '/songs')
export const songsArray = responseSongs.data
/*
import {songsArray} from "../../../api/api.js"
export {songsArray}
*/