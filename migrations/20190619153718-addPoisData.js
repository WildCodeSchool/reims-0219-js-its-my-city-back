
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */


let dbm;
let type;
let seed;


/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.insert('point_of_interest', [
    'name',
    'creation_date',
    'author_id',
    'picture_id',
    'latitude',
    'longitude',
  ],
  [
    'Notre Dame de Reims',
    '2019-06-18',
    '1',
    '9',
    '49.253968',
    '4.034061',
  ])
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Porte de Mars',
          '49.260615',
          '4.029992',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Basilique Saint-Remi',
          '49.243236',
          '4.042057',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Toilettes Publiques',
          '49.254225',
          '4.031363',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Décheterie Reims Europe',
          '49.246514',
          '4.069071',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Décheterie Reims Croix Rouge',
          '49.219887',
          '4.018164',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Benne à verre',
          '49.257599',
          '4.019289',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Conteneur à vêtements',
          '49.274819',
          '4.017276',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Conteneur à vêtements',
          '49.245993',
          '4.042758',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Complexe Multisport',
          '49.261015',
          '4.018959',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('point_of_interest', [
          'name',
          'latitude',
          'longitude',
          'creation_date',
          'author_id',
          'picture_id',
        ], [
          'Terrains de Football Georges Hebert',
          '49.282522',
          '4.018788',
          '2019-06-18',
          '1',
          '9',
        ]);
      },
    );
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
