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
  return  db.createTable('keyword', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    importance: { type: 'int', notNull: true },
  })
  .then(
    function(result){
      db.insert("keyword", [
        "name",
        "importance"
      ], [
        "Nature",
        "1"
      ]);
    }
  )
  .then(
    function(result){
      db.insert("keyword",[
        "name",
        "importance"
      ], [
        "Sport",
        "1"
      ])
    }
  )
};

exports.down = function(db) {
  return db.dropTable('keyword');
};

exports._meta = {
  "version": 1
};
