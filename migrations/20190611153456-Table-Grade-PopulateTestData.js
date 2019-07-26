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
  return db.insert('grades', [
    'global_grade',
    'accessibility',
    'condition',
    'functional',
    'user_id',
    'poi_id',
  ], [
    '2',
    '3',
    '1',
    '2',
    '1',
    '2',
  ])
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '2',
          '1',
          '3',
          '1',
          '3',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '3',
          '3',
          '3',
          '3',
          '1',
          '4',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '3',
          '4',
          '1',
          '2',
          '1',
          '5',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '4',
          '3',
          '5',
          '4',
          '1',
          '6',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '7',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '8',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '10',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '11',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '12',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '13',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '14',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '15',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '16',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '17',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '18',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '19',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '5',
          '5',
          '5',
          '5',
          '1',
          '20',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '4',
          '4',
          '4',
          '4',
          '1',
          '21',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '5',
          '5',
          '5',
          '5',
          '1',
          '22',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '5',
          '5',
          '5',
          '5',
          '1',
          '23',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '3',
          '3',
          '3',
          '3',
          '1',
          '24',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '2',
          '2',
          '2',
          '1',
          '25',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '4',
          '4',
          '4',
          '4',
          '1',
          '26',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '4',
          '3',
          '4',
          '4',
          '1',
          '27',
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
