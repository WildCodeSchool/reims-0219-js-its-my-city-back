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
          '1',
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
          '1',
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
          '1',
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
          '1',
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
    );
};

exports.down = function (db) {
  return db.dropTable('poi_keywords');
};

exports._meta = {
  version: 1,
};
