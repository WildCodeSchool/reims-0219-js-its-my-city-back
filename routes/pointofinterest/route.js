/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const transformPoiIdJson = require('../../functions/transformPoiIdJson');
const getPoiInfosById = require('../../queries/getPoiInfosById');
const getSamplePoisInfos = require('../../queries/getSamplePoisInfos');
const { createNewPoi } = require('../../queries/createNewPoi');
const { addNewPic } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');


// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));

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
  const formData = req.body;
  console.log(formData);
  connection.query(addNewPic, [formData], (err) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération de l'image : ${err}`);
    } else {
      res.status(200).send('Votre point à bien été ajouté');
    }
  });
  connection.query(createNewPoi, formData, (err) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération de l'image : ${err}`);
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/', (req, res) => {
  connection.query(getKeywords, (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des mots-clés : ${err}`);
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
