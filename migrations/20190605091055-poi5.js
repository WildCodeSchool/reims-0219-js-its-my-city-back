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
  return db.insert("point_of_interest", [
    "name",
    "informations",
    "author_id",
    "picture_id",
    "latitude",
    "longitude"
  ], [
    "Table de Ping Pong",
    "",
    "1",
    "5",
    "49.276670",
    "4.056639"
  ]);;;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
