const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const addArray = require('../../functions/Add_array');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample', (req, res) => {
  connection.query('SELECT * FROM point_of_interest ORDER BY RAND() LIMIT 5', (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(addArray(datas));
    }
  });
});

router.get('/:id', (req, res) => {
  const poiId = req.params.id;
  connection.query('SELECT * FROM point_of_interest WHERE id=?', [poiId], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du point d'interet ${poiId} : ${err}`);
    } else {
      res.json(datas);
    }
  });
});

module.exports = router;
