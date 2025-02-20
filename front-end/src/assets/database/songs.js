import axios from "axios";
const URI = "http://localhost:4000";
export let songsArray = [];
export let artistArray = [];
const loadData = async () => {
    const responseSongs = await axios.get(URI + "/songs");
    const responseArtists = await axios.get(URI + "/artists");
    songsArray = responseSongs.data;
    artistArray = responseArtists.data;
};
loadData();
