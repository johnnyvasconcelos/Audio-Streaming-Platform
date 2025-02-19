import express from 'express';
//import cors from 'cors';
import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js';

const app = express();
const PORT = 4000;

//app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

app.get('/', (req, res) => {
    res.send(songsArray);
});

app.get('/artists', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('artists').find({}).toArray());
});

app.get('/songs', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('songs').find({}).toArray());
});


