/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');
const connection = require('../../conf');
const transformPoiSampleJson = require('../../functions/transformPoiSampleJson');
const getSamplePois = require('../../queries/getSamplePois');
const { createNewPoi } = require('../../queries/createNewPoi');
const getKeywords = require('../../queries/getKeywords');
const getFilteredPoi = require('../../queries/getFilteredPoi');
const getFilteredPoiByKeyword1 = require('../../queries/getFilteredPoiByKeyword1');
const { linkNewlyCreatedPoiWithKeyword } = require('../../queries/linkNewlyCreatedPoiWithKeyword');
const insertGradesNewPoi = require('../../queries/insertGradesNewPoi');
const { createNewPicture } = require('../../queries/createNewPicture');
const getPoiInfosById = require('../../queries/getPoiInfosById');


// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));

router.use(express.static('public'));

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

// Get the id of the poi created previously
let resultPicture;

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


  connection.query(createNewPoi, [formData, authorName, resultPicture], (errorPoi, result) => {
    if (errorPoi) {
      res.status(500).send(`erreur lors de la création du point d'intéret : ${errorPoi}`);
    } else {
      // Get the id of the poi created previously
      const resultId = { poi_id: result.insertId };
      connection.query(linkNewlyCreatedPoiWithKeyword, [keyword, resultId], (errorKeyword) => {
        if (errorKeyword) {
          res.status(500).send(`Erreur lors de l'ajout du thème : ${errorKeyword}`);
        } else {
          connection.query(insertGradesNewPoi, [grades, authorName, resultId.poi_id], (errorGrades) => {
            if (errorGrades) {
              res.status(500).send(`Erreur lors de l'ajout des notes : ${errorGrades}`);
            } else {
              connection.query(getPoiInfosById, [resultId.poi_id], (errorPoiId, resultPoiId) => {
                if (errorPoiId) {
                  res.status(500).send(`Erreur lors de la récupération du poi : ${errorPoiId}`);
                } else {
                  res.json(transformPoiSampleJson(resultPoiId));
                }
              });
            }
          });
        }
      });
    }
  });
});


// upload picture
router.post('/picture', (req, res) => {
  const formData = new formidable.IncomingForm();
  console.log(formData);
  formData.parse(req, function (errorParse, fields, files) {
    const olpath = files.file.path;
    const newpath = `./public/images/${files.file.name}`;
    fs.rename(olpath, newpath, function (errorPathChange) {
      if (errorPathChange) {
        res.send(`erreur lors du déplacement :${errorPathChange}`);
      } else {
        connection.query(createNewPicture, [files.file.name, files.file.name], (errorPic, resultPic) => {
          if (errorPic) {
            res.status(500).send(`Erreur lors de la création de l'image : ${errorPic}`);
          } else {
            // Get the id of the poi created previously
            resultPicture = resultPic.insertId;
            res.send('upload ok');
          }
        });
      }
    });
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
      res.status(500).send(`Erreur lors de la récupération des mots-clés : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

router.get('/filterKeyword1/:keyword', (req, res) => {
  const keywordToSearch = req.params.keyword;
  connection.query(getFilteredPoiByKeyword1, [keywordToSearch], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des mots-clés : ${err}`);
    } else {
      res.json(transformPoiSampleJson(datas));
    }
  });
});

module.exports = router;
