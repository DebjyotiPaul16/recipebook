
const express = require('express');
const bodyParser = require('body-parser');

const recipebook = require('./server/routes/recipe.routes'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/recipebook', recipebook);


var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
// let port = 8080;

// app.listen(port, () => {
//     console.log('Server is up and running on port numner ' + port);
// });