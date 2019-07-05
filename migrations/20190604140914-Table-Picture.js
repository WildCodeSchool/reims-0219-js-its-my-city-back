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
          'Piscine Talleyrand',
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
          'Skate Parc',
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
          'Terrain de foot',
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
          'Table de Ping-Pong',
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
          'Table de Ping-Pong',
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
          'Table de Ping-Pong',
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
          'Jardin',
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
          'Parc',
          'Default_Picture.webp',
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
    );
};

exports.down = function (db) {
  return db.dropTable('picture');
};

exports._meta = {
  version: 1,
};
