import express from 'express';
// Middleware = cors
const App = express();
const PORT = 3400;
import cors from 'cors';

App.use(cors())

import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js'
App.listen(PORT, () => {
    console.log('Servidor está na porta ' + PORT)
});
App.get('/', (req, res) => {
    res.send(songsArray)
});
App.get('/artists', async (req, res) => {
    res.send(await db.collection('artists').find({}).toArray())
});
App.get('/songs', async (req, res) => {
    res.send(await db.collection('songs').find({}).toArray())
});
