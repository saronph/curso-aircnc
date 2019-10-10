const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:semana@cluster0-nxfti.mongodb.net/semana?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

// req.query  = acessa query params (para filtros)
// req.params = acessa route params (edição e delete)
// req.body = acessa corpo da requisição (criação/edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); //faz aparecer imagem nos sptos
app.use(routes);

app.listen(3333);