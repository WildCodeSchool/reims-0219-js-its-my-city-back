'use strict';

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
  return db.insert('point_of_interest', [
    'name',
    'creation_date',
    'author_id',
    'picture_id',
    'latitude',
    'longitude',
  ],
  [
    'Notre Dame de Reims',
    '2019-06-18',
    '1',
    '9',
    '49.253968',
    '4.034061',
  ]);
};

exports.down = function (db) {
  return db.delete('point_of_interest', [
    'name',
    'latitude',
    'longitude',
    'creation_date',
    'author_id',
    'picture_id',
  ],
  [
    'Notre Dame de Reims',
    '49.253968',
    '4.034061',
    '2019-06-18',
    '1',
    '9',
  ]);
};

exports._meta = {
  "version": 1
};
