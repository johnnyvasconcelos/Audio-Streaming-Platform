import express from 'express';
const App = express();
const PORT = 3421;
import { songsArray } from '../../front-end/src/assets/database/songs.js';
App.listen(PORT, () => {
    console.log('Servidor está na porta ' + PORT)
});
App.get('/', (req, res) => {
    res.send(songsArray)
});
App.get('/artists', (req, res) => {
    res.send('OK')
});
