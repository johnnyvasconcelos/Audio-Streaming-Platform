import axios from "axios";
const URI = "http://localhost:4000";
export let songsArray = [];
export let artistArray = [];
(async function fetchSongs() {
    try {
        const response = await axios.get(URI + "/songs");
        songsArray = response.data;
    } catch (error) {
        console.error("Erro ao buscar as músicas:", error);
    }
})();
(async function fetchArtist() {
    try {
        const response = await axios.get(URI + "/artists");
        artistArray = response.data;
    } catch (error) {
        console.error("Erro ao buscar as músicas:", error);
    }
})();