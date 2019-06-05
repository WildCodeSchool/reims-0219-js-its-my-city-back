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
    "Table de Ping-Pong",
    "https://www.magequip.com/media/catalog/product/cache/31a470d3411692d4c06a09bc75181cbc/6/3/630003_1.jpg"
  ]);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
