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
  return db.createTable('keyword', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    importance: { type: 'int', notNull: true },
    informations: { type: 'char', length: 255 },
  })
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Nature',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Sport',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Attraction',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Monument',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Utilitaire',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Hygiène',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Sports_Collectifs',
          '2',
          'horaires',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('keyword');
};

exports._meta = {
  version: 1,
};
