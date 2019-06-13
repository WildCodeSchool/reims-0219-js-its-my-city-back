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
    latitude: { type : "float", notNull : true },
    longitude: { type : "float", notNull : true },
    creation_date: {type: 'datetime', notNull: true, },
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
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Piscine Talleyrand",
        "2019-06-12 08:00:00",
        "1",
        "1",
        "49.2563256",
        "4.025759"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Skate Park",
        "2019-06-10 09:00:00",
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
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Terrain de foot",
        "2019-05-02 08:20:03",
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
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Table de Ping Pong",
        "2018-05-12 08:00:40",
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
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Table de Ping Pong",
        "2019-03-01 07:04:10",
        "1",
        "5",
        "49.276670",
        "4.056639"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Table de Ping Pong",
        "2019-03-01 07:04:10",
        "1",
        "6",
        "49.243785",
        "3.989211"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Jardin",
        "2019-03-01 07:04:10",
        "1",
        "7",
        "49.244871",
        "3.990526"
      ])
    }
  )
  .then(
    function(result){
      db.insert("point_of_interest", [
        "name",
        "creation_date",
        "author_id",
        "picture_id",
        "latitude",
        "longitude"
      ], [
        "Parc",
        "2019-02-04 07:04:10",
        "1",
        "8",
        "49.248961",
        "3.997111"
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
