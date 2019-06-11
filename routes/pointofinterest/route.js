const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample', (req, res) => {
  connection.query('SELECT id, name, informations, latitude, longitude, author_id, picture_id FROM point_of_interest ORDER BY RAND() LIMIT 5', (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

router.get('/:id', (req, res) => {
  const poiId = req.params.id;
  connection.query('SELECT id, name, information, latitude, longitude, author_id, picture_id FROM point_of_interest WHERE id=?', [poiId], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du point d'interet ${poiId} : ${err}`);
    } else {
      res.json(datas);
    }
  });
});

module.exports = router;
