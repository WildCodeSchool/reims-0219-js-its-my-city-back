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
  return db.insert("picture", [
    "name",
    "url"
  ], [
    "Terrain de foot",
    "http://s1.lprs1.fr/images/2017/12/26/7471668_ffd7436e-e71e-11e7-9604-a8c9b65ef7a0-1_1000x625.jpg"
  ]);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
