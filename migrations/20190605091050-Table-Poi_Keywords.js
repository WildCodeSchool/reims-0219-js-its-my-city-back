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
          '25',
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
          '13',
          '2',
        ]);
      },
    ).then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '14',
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
          '11',
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
          '11',
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
          '11',
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
          '18',
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
          '14',
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
          '26',
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
          '26',
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
          '29',
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
          '28',
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
          '28',
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
          '44',
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
          '47',
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
          '47',
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
          '12',
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
          '6',
          '18',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '11',
          '19',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '19',
          '20',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '19',
          '21',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '41',
          '22',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '11',
          '23',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '16',
          '24',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '11',
          '25',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_id',
          'poi_id',
        ], [
          '11',
          '26',
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
