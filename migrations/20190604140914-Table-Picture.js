/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */


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
  return db.createTable('picture', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    url: { type: 'text', notNull: true },
  })
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Table de ping-pong',
          'PingPong.png',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Skate Parc',
          'SkatePark.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Terrain de foot',
          'TerrainFoot.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Table de Ping-Pong',
          'PingPong2',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Container à verre',
          'ContainerVerre.jpeg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Container à vêtements',
          'ContainerVetements.jpeg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Jardin',
          'Jardin.jpeg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Parc',
          'Parc.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], ['standard picture',
          'Default_Picture.webp',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Gymnase',
          'GymnaseCourcelles.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Composteur',
          'Composteur.jpeg',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('picture');
};

exports._meta = {
  version: 1,
};
