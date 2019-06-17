const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const transformPoiIdJson = require('../../functions/transformPoiIdJson');
const getPoiInfosById = require('../../queries/getPoiInfosById');
const getSamplePoisInfos = require('../../queries/getSamplePoisInfos');
const createNewPoi = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample', (req, res) => {
  connection.query(getSamplePoisInfos, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

router.get('/keywords', (req, res) => {
  connection.query(getKeywords, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des mots-clés : ${err}`);
    } else {
      res.json(datas);
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

router.post('/create', (req, res) => {
  connection.query(createNewPoi, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
