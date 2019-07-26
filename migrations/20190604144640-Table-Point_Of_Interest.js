/* eslint-disable no-sparse-arrays */
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
  return db.createTable('point_of_interest', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    latitude: { type: 'float', notNull: true },
    longitude: { type: 'float', notNull: true },
    creation_date: { type: 'datetime', notNull: true },
    author_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'poi_author_fk',
        table: 'user',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { author_id: 'id' },
      },
    },
    picture_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'poi_picture_fk',
        table: 'picture',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { picture_id: 'id' },
      },
    },
  })
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
          'Monument - Statue de Colbert',
          '49.258249',
          '4.025699',
          '2019-06-12 08:00:00',
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
          'Table de ping-pong - Rue Bruyant',
          '49.258845',
          '4.014892',
          '2019-06-18',
          '1',
          '1',
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
          'Terrain de foot - Stade George Hébert',
          '49.276670',
          '4.019728',
          '2019-05-02 08:20:03',
          '1',
          '3',
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
          'Skate Park - Léo Lagrange',
          '49.244777',
          '4.025301',
          '2019-06-10 09:00:00',
          '1',
          '2',
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
          'Table de Ping Pong - Potière',
          '49.276670',
          '4.056639',
          '2019-03-01 07:04:10',
          '1',
          '4',
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
          'Table de Ping Pong - Parc Croix-Cordier',
          '49.243785',
          '3.989211',
          '2019-03-01 07:04:10',
          '1',
          '1',
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
          'Parc - Croix-Cordier',
          '49.244871',
          '3.990526',
          '2019-03-01 07:04:10',
          '1',
          '8',
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
          'Terrain de foot - Stade de la Muire',
          '49.248961',
          '3.997111',
          '2019-02-04 07:04:10',
          '1',
          '3',
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
          'Patrimoine Historique - Porte de Mars',
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
          'Patrimoine historique - Basilique Saint-Remi',
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
          'Toilettes Publiques - Palais de Justice',
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
          'Dechetterie - Reims Europe',
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
          'Dechetterie - Reims Croix Rouge',
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
          'Container à verre - Saint-Brice',
          '49.257599',
          '4.019289',
          '2019-06-18',
          '1',
          '5',
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
          'Collecte de vêtements - Saint-Joseph',
          '49.274819',
          '4.017276',
          '2019-06-18',
          '1',
          '6',
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
          'Collecte de vêtements - Saint Brice',
          '49.256898',
          '4.019600',
          '2019-06-18',
          '1',
          '6',
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
          'City stade - Complexe Multisport',
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
          'Boulodrome - Saint-Brice',
          '49.257182',
          '4.018984',
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
          'Container à verre - Boulingrin',
          '49.259728',
          '4.031404',
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
          'Square - Alexandre Henrot',
          '49.264522',
          '4.015470',
          '2019-06-18',
          '1',
          '8',
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
          'Square - Place Michel-Ange',
          '49.267673',
          '4.012502',
          '2019-06-18',
          '1',
          '8',
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
          'Pole Emploi - Mont d\'Arene',
          '49.261917',
          '4.020403',
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
          'Table de Ping Pong - Wilson',
          '49.240366',
          '4.019728',
          '2018-05-12 08:00:40',
          '1',
          '4',
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
          'Sport en groupe - Gymnase Courcelles',
          '49.260698',
          '4.018325',
          '2019-06-18',
          '1',
          '10',
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
          'Table de ping-pong - Courcelles',
          '49.260337',
          '4.017558',
          '2019-06-18',
          '1',
          '1',
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
          'Table de ping-pong - Roosevelt',
          '49.262441',
          '4.025523',
          '2019-07-19',
          '1',
          '4',
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
          'Composteur - Saint-Brice',
          '49.256728',
          '4.018842',
          '2019-07-19',
          '1',
          '4',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('point_of_interest');
};

exports._meta = {
  version: 1,
};
