/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const getSamplePoisInfos = require('../../queries/getSamplePoisInfos');
const getSamplePoisInfosCriteria = require('../../queries/getSamplePoisInfosCriteria');
const { createNewPoi } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');
const getFilteredPoi = require('../../queries/getFilteredPoi');


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
  connection.query(createNewPoi, [formData], (err) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération de l'image : ${err}`);
    } else {
      res.sendStatus(200);
    }
  });
})

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

router.get('/filter/:keyword', (req, res) => {
  const keywordToSearch = req.params.keyword;
  connection.query(getFilteredPoi, [keywordToSearch], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
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

module.exports = router;
