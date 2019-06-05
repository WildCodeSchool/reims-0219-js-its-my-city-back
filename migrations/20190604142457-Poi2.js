'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.insert("pointofinterest", [
    "name",
    "informations",
    "author_id",
    "picture_id",
    "latitude",
    "longitude"
  ], [
    "Piscine Talleyrand",
    "mardi 07:00–11:45",
    "1",
    "1",
    "49.2568862",
    "4.0251282"
  ]);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
