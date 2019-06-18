/* eslint-disable prefer-const */
/* eslint-disable func-names */
const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const transformPoiIdJson = require('../../functions/transformPoiIdJson');
const getPoiInfosById = require('../../queries/getPoiInfosById');
const getSamplePoisInfos = require('../../queries/getSamplePoisInfos');
const { createNewPoi } = require('../../queries/createNewPoi');
const { addNewPic } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');

router.use((req, res, next) => {
  let { send } = res;
  let sent = false;
  res.send = function (data) {
    if (sent) return;
    send.bind(res)(data);
    sent = true;
  };
  next();
});

router.post('/', (req, res) => {
  connection.query(createNewPoi, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la création du point d'interet : ${err}`);
    } else {
      res.json(datas);
    }
  });
  connection.query(addNewPic, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération de l'image : ${err}`);
    } else {
      res.json(datas);
    }
  });
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

module.exports = router;
