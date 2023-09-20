import express from 'express'
const app = express();
const port = process.env.PORT || 3000; // Port par défaut 3000

// Middleware pour servir des fichiers statiques depuis le dossier "public"
app.use(express.static('public'));

// Endpoint "/" qui renvoie un fichier HTML
app.get('/', (req, res) => {
    res.sendFile( 'index.html');
});

// Endpoint dynamique
app.get('/api/data/:number', (req, res) => {
    const number = req.params.number;
    // Vous pouvez utiliser la valeur du nombre pour générer une réponse JSON ici
    const responseData = { result: `You provided the value ${number}` };
    res.json(responseData);
});
app.use((req, res, next) => {
    res.status(404).send("Page not found <br> <a href=\"/\">Go main menu</a>");
});

// Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});