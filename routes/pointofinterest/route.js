const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const transformPoiIdJson = require('../../functions/transformPoiIdJson');
const getPoiInfosById = require('../../queries/getPoiInfosById');
const getSamplePoiInfos = require('../../queries/getSamplePoiInfos')
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample', (req, res) => {
  connection.query(getSamplePoiInfos, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

router.get('/:id', (req, res) => {
  const poiId = req.params.id;
  connection.query(getPoiInfosById, [poiId], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du point d'interet ${poiId} : ${err}`);
    } else {
      res.json(transformPoiIdJson(datas));
    }
  });
});

module.exports = router;
