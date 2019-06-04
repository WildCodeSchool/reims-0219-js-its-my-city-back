require('dotenv').config()
const express = require('express');
const app = express();
const port = 3001;
const connection = require('./conf');

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


  //All to pick up a filter for the keywords in the database
  //Test for deployment
  app.get('/poi/filter/', (req, res) => {
    connection.query('SELECT * FROM pointofinterest', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des points d\'intèrêts' );
      } else {
        res.json(results);
      }
    });
  });


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
}); 
