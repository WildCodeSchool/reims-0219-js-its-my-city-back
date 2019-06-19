const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const transformPoiIdJson = require('../../functions/transformPoiIdJson');
const getPoiInfosById = require('../../queries/getPoiInfosById');
const getSamplePoisInfos = require('../../queries/getSamplePoisInfos');
const getSamplePoisInfosCriteria = require('../../queries/getSamplePoisInfosCriteria');
const { createNewPoi } = require('../../queries/createNewPoi');
const { addNewPic } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample/:latitude/:longitude', (req, res) => {
  const latToUse = req.params.latitude;
  const longToUse = req.params.longitude;
  connection.query(`${getSamplePoisInfos} WHERE keyword.name = 'Sport' ${getSamplePoisInfosCriteria} 
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Nature' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Attraction' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Monument' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Utilitaire' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Hygiène' ${getSamplePoisInfosCriteria});`,
  [latToUse, longToUse, latToUse,
    latToUse, longToUse, latToUse,
    latToUse, longToUse, latToUse,
    latToUse, longToUse, latToUse,
    latToUse, longToUse, latToUse,
    latToUse, longToUse, latToUse], (err, datas) => {
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

router.post('/picture', (req, res) => {
  connection.query(addNewPic, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur los de la création de l'image : ${err}`);
    } else {
      res.json(results);
    }
  });
});

router.post('/create', (req, res) => {
  connection.query(createNewPoi, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la création du point d'interet : ${err}`);
    } else {
      res.json(results);
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
