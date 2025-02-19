import express from 'express';
import cors from 'cors';
// import { artistArray } from './content.js';
// import { songsArray } from './content.js';
import { db } from './connect.js';
const app = express();
const PORT = 4000;
app.use(cors());
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
app.get('/songs', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('songs').find({}).toArray());
});
app.get('/artists', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('artists').find({}).toArray());
});