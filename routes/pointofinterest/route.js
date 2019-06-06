const express = require('express');
const router = express.Router();
const connection = require('../../conf');

router.use((req, res, next) => {
  next()
});

router.get('/:id', (req, res) => {
  const poiId = req.params.id
  connection.query('SELECT * FROM pointofinterest WHERE id=?', [poiId], (err, datas) => {
    if (err){
      res.status(500).send(`Erreur lors de la récupération du point d\'interet ${poiId} : ${err}`);
    }else {
      res.json(datas)
    }
  })
});

router.get('/sample', function (req, res) {
  connection.query('SELECT * FROM pointofinterest WHERE id = ROUND( RAND() * 4) + 1', (err, datas) => {
    if (err){
      res.status(500).send(`Erreur lors de la récupération des points d\'interets : ${err}`);
    }else{
      res.json(datas)
    }
  }) 
});

router.post('/create', function (req, res) {
  connection.query('', (err, datas) => {
    if (err){
      res.status(500).send(`Erreur lors de la création du point d\'interet : ${err}`);
    }else{
    res.json(datas)
    }
  })
});

router.get('/filter', function (req, res) {
  if (err){
    res.status(500).send(`Erreur de lors récupération des filtres : ${err}`);
  }else{
    res.json(datas)
  }
});

module.exports = router;
