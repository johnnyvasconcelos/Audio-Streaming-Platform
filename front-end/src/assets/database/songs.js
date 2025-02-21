import axios from "axios";
const URI = "https://audio-streaming-platform.onrender.com/api/";
export let songsArray = [];
export let artistArray = [];
const loadData = async () => {
    const responseSongs = await axios.get(URI + "/songs");
    const responseArtists = await axios.get(URI + "/artists");
    songsArray = responseSongs.data;
    artistArray = responseArtists.data;
};
loadData();
