import axios from "axios";
const URI = "https://audio-streaming-platform.onrender.com/api/";

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
    console.error("Erro ao buscar os artistas:", error);
  }
})();
