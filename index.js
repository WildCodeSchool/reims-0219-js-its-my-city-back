require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

//Allow the creation a point of interest
app.post('/Poi', (req, res) => {
    connection.query('SELECT * from ', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
      } else {
        res.json(results);
      }
    });
  });

//Random sample of pins for the home page of the app
app.get('/Poi/Sample', (req, res) => {
    connection.query('SELECT * from ', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
      } else {
        res.json(results);
      }
    });
  });

  //All to pick up a filter for the keywords in the database
  app.get('/Poi/Filter/', (req, res) => {
    connection.query('SELECT name FROM test', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
      } else {
        res.json(results);
      }
    });
  });

  
  //Get the description of a specific point of interest
  app.get('/Poi/Filter/:id', (req, res) => {
    connection.query('SELECT * from ', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
      } else {
        res.json(results);
      }
    });
  });

  //Post a new user account in the database
  app.post('/User', (req, res) => {
    connection.query('SELECT * from ', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
      } else {
        res.json(results);
      }
    });
  });

  //Post a new rating of a point of interest
  app.post('/User/:id/Grade/Poi/:id', (req, res) => {
    connection.query('SELECT * from ', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des ');
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
