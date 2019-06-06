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
  return db.createTable('point_of_interest', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    informations: { type: 'char', length: 255 },
    latitude: { type : "float", notNull : true },
    longitude: { type : "float", notNull : true },
    author_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'poi_author_fk',
        table: 'user',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { author_id: 'id' },
      },
    },
    picture_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'poi_picture_fk',
        table: 'picture',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { picture_id: 'id' },
      },
    },
  })
  .then(
    function(result){
      db.insert("point_of_interest", [
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
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "informations",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Skate Park",
        "",
        "1",
        "2",
        "49.244777",
        "4.025301"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "informations",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Terrain de foot",
        "",
        "1",
        "3",
        "49.276670",
        "4.019728"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
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
        "4",
        "49.240366",
        "4.019728"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
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
      ])
    }
  )
  
};

exports.down = function(db) {
  return db.dropTable('point_of_interest');
};

exports._meta = {
  "version": 1
};
