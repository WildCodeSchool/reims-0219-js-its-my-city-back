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
  return db.createTable('poi_keywords', {
    keyword_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'rank_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_id: 'id' },
      },
    },
    poi_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'rank_poi_fk',
        table: 'point_of_interest',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { poi_id: 'id' },
      },
    },
  })
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '1',
          '1',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '1',
          '2',
        ]);
      },
    ).then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '4',
          '3',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '4',
          '4',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '3',
          '5',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '3',
          '6',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '2',
          '7',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '2',
          '8',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '5',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '1',
          '10',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '1',
          '11',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '4',
          '12',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '2',
          '13',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '3',
          '14',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '2',
          '15',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '1',
          '16',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '5',
          '17',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '5',
          '18',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('poi_keywords');
};

exports._meta = {
  version: 1,
};
