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
    "Skate Parc",
    "https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2017/07/05/le-skate-parc-un-projet-porte-par-les-jeunes.jpg?itok=6MCZjGIK"
  ]);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
