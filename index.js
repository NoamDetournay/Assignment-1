import express from 'express'
import { epExport } from './public/script/function.js'

const app = express();
const port = process.env.PORT || 3000; // Port par défaut 3000

// Middleware pour servir des fichiers statiques depuis le dossier "public"
app.use(express.static('public'));

// Endpoint "/" qui renvoie un fichier HTML
app.get('/', (req, res) => {
    res.sendFile( 'index.html');
});
app.get('/a_propos.html', (req, res) => {
    res.sendFile( 'a_propos.html');
});
app.get('/404.html', (req, res) => {
    res.sendFile( '404.html');
});

// Endpoint dynamique
app.get('/api/data/:number', epExport);
app.use((req, res) => {
    res.sendStatus( 404);
});

// Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});