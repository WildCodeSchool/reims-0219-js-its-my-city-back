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
          'Piscine Talleyrand',
          '49.2563256',
          '4.025759',
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
          'Skate Park',
          '49.244777',
          '4.025301',
          '2019-06-10 09:00:00',
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
          'Terrain de foot',
          '49.276670',
          '4.019728',
          '2019-05-02 08:20:03',
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
          'Table de Ping Pong',
          '49.240366',
          '4.019728',
          '2018-05-12 08:00:40',
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
          'Table de Ping Pong',
          '49.276670',
          '4.056639',
          '2019-03-01 07:04:10',
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
          'Table de Ping Pong',
          '49.243785',
          '3.989211',
          '2019-03-01 07:04:10',
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
          'Jardin',
          '49.244871',
          '3.990526',
          '2019-03-01 07:04:10',
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
          'Parc',
          '49.248961',
          '3.997111',
          '2019-02-04 07:04:10',
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
  return db.dropTable('point_of_interest');
};

exports._meta = {
  version: 1,
};
