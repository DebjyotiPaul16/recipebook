
const express = require('express');
const bodyParser = require('body-parser');

const recipebook = require('./server/routes/recipe.routes'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/recipebook', recipebook);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});