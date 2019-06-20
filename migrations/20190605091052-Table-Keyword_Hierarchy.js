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
  return db.createTable('keyword_hierarchy', {
    keyword_parent: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithkf1_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_parent: 'id' },
      },
    },
    keyword_children: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithfk2_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_children: 'id' },
      },
    },
  })
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '6',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '7',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '8',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '9',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '10',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '11',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '12',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '13',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '14',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '15',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '16',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '1',
          '17',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '18',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '19',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '20',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '21',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '22',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '23',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '24',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '25',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '26',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '2',
          '27',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '28',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '29',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '30',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '31',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '32',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '33',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '34',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '35',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '36',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '37',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '38',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '39',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '40',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '41',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '3',
          '42',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '43',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '44',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '45',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '46',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '47',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '48',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '49',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '50',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '51',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '52',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '53',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '54',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '55',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '56',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '57',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '4',
          '58',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '59',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '60',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '61',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '62',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '63',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '64',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '65',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '66',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '67',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '68',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '69',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '70',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '71',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('poi_keywords', [
          'keyword_parent',
          'keyword_children',
        ], [
          '5',
          '72',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('keyword_hierarchy');
};

exports._meta = {
  version: 1,
};
