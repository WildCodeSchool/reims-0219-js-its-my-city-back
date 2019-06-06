const express = require('express');
const router = express.Router();
const connection = require('../../conf');

router.use((req, res, next) => {
  next()
});

//Affiche l'objet de ml'utilisateur selectionné
router.get('/:id', (req, res) => {
  const userId = req.params.id

  connection.query('SELECT * FROM user WHERE id=?', [userId], (err, datas) => {
    if (err){
      res.status(500).send(`Erreur lors de la récupération de l\'utilisateur ${userId} : ${err}`);
    }else {
      res.json(datas)
    }
  })
});

//Vérification des informations 
router.get('/authentification', function (req, res) {
  connection.query('', (err, datas) => {
    if (err){
      res.status(500).send(`Erreur lors de la récupération de l\'utilisateur ${userId} : ${err}`);
    }else {
      res.json(datas)
    }
  })
});

//Création d'un compte utilisateur
router.post('/create', function (req, res) {
  connection.query('', (err, datas) => {
    if (err){
    res.status(500).send(`Erreur lors de la création de l\'utilisateur : ${err}`);
    }else {
    res.json(datas)
    }
  })  
});

//Notation du point d'interet
router.put('/:id/grade', function (req, res) {
  connection.query('', (err, datas) => {
    if (err){
    res.status(500).send(`Erreur lors de la modication des notes : ${err}`);
    }else {
    res.json(datas)
    }
  })  
});

module.exports = router;
