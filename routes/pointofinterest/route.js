const express = require('express');

const router = express.Router();
const connection = require('../../conf');
const addArray = require('../../functions/Add_array');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/sample', (req, res) => {
  connection.query(`SELECT p.id, 
                           p.name, 
                           p.informations, 
                           p.latitude, 
                           p.longitude, 
                           picture.url, 
                           picture.name, 
                           user.name AS author 
                           FROM point_of_interest p  
                           JOIN picture ON picture.id=p.picture_id
                           JOIN user ON user.id=p.author_id`,
  (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des points d'interets : ${err}`);
    } else {
      res.json(addArray(datas));
    }
  });
});

router.get('/:id', (req, res) => {
  const poiId = req.params.id;
  connection.query(`SELECT p.id, 
                           p.name, 
                           p.informations, 
                           p.latitude, 
                           p.longitude, 
                           picture.url, 
                           picture.name, 
                           user.name AS author, 
                           grades.accessibility, 
                           grades.condition, 
                           grades.functional,
                           (grades.accessibility + grades.condition + grades.functional)/3 AS average
                           FROM point_of_interest p 
                           JOIN picture ON picture.id=p.picture_id 
                           JOIN user ON user.id=p.author_id 
                           JOIN grades ON poi_id=p.id 
                           WHERE p.id=?`, [poiId], (err, datas) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du point d'interet ${poiId} : ${err}`);
    } else {
      res.json(addArray(datas));
    }
  });
});

module.exports = router;
