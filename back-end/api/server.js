import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import path from 'path';
const __dirname = path.resolve();
const app = express();
const PORT = 4000;
app.use(cors());
app.get('/api/songs', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('songs').find({}).toArray());
});
app.get('/api/artists', async (req, res) => {
    if (!db) return res.status(500).send('Erro na conexão com o banco de dados.');
    res.send(await db.collection('artists').find({}).toArray());
});
app.use(express.static(path.join(__dirname, '../../front-end/dist')));
app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../front-end/dist/index.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});