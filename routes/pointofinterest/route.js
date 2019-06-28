/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const getSamplePois = require('../../queries/getSamplePois');
const { createNewPoi } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');
const getFilteredPoi = require('../../queries/getFilteredPoi');
const getFilteredPoiByKeyword1 = require('../../queries/getFilteredPoiByKeyword1');
const { linkNewlyCreatedPoiWithKeyword } = require('../../queries/linkNewlyCreatedPoiWithKeyword');
const insertGradesNewPoi = require('../../queries/insertGradesNewPoi');

// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));

// allow to get and post content from localhost to localhost
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
  const formData = {
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  const grades = {
    global_grade: req.body.global_grade,
    accessibility: req.body.accessibility,
    condition: req.body.condition,
    functional: req.body.functional,
  };
  const authorName = req.body.author_id;
  const { keyword } = req.body;
  connection.query(createNewPoi, [formData, authorName], (err, result) => {
    if (err) {
      res.status(500).send(`Erreur lors de la création du point d'intéret : ${err}`);
    } else {
      // Get the id of the poi created previously
      const resultId = { poi_id: result.insertId };
      connection.query(linkNewlyCreatedPoiWithKeyword, [keyword, resultId], (error) => {
        if (error) {
          res.status(500).send(`Erreur lors de l'ajout du thème : ${error}`);
        } else {
          connection.query(insertGradesNewPoi, [grades, authorName, resultId.poi_id], (e) => {
            if (e) {
              res.status(500).send(`Erreur lors de l'ajout des notes : ${e}`);
            } else {
              res.sendStatus(200);
            }
          });
        }
      });
    }
  });
});

// get two closest pois per keyword in a 3 km radius around the user at loading
router.get('/sample/:latitude/:longitude', (req, res) => {
  const latToUse = req.params.latitude;
  const longToUse = req.params.longitude;
  connection.query(getSamplePois,
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

router.get('/filterKeyword1/:keyword', (req, res) => {
  const keywordToSearch = req.params.keyword;
  connection.query(getFilteredPoiByKeyword1, [keywordToSearch], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

module.exports = router;
