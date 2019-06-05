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
  return db.createTable('picture', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    url: { type: 'text', notNull: true },
})
.then(
  function(result){
    db.insert("picture", [
      "name",
      "url"
    ], [
      "Piscine Talleyrand",
      "https://www.google.fr/maps/place/Piscine+Talleyrand/@49.2568862,4.0251282,2672a,13.1y/data=!3m8!1e2!3m6!1sAF1QipMQLrYyc6u7Kvi9I9ExiNGsEYr02YM2PkLr1zbF!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMQLrYyc6u7Kvi9I9ExiNGsEYr02YM2PkLr1zbF%3Dw152-h86-k-no!7i1920!8i1080!4m5!3m4!1s0x47e975ab100d31f7:0xa405dd9732ffc3bf!8m2!3d49.2563223!4d4.0279531#"
    ])
  }
)
.then(
  function(result){
    db.insert("picture", [
      "name",
      "url"
    ], [
      "Skate Parc",
      "https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2017/07/05/le-skate-parc-un-projet-porte-par-les-jeunes.jpg?itok=6MCZjGIK"
    ]);
  }
)
.then(
  function(result){
    db.insert("picture", [
      "name",
      "url"
    ], [
      "Terrain de foot",
      "http://s1.lprs1.fr/images/2017/12/26/7471668_ffd7436e-e71e-11e7-9604-a8c9b65ef7a0-1_1000x625.jpg"
    ]);
  }
)
.then(
  function(result){
    db.insert("picture", [
      "name",
      "url"
    ], [
      "Table de Ping-Pong",
      "https://www.magequip.com/media/catalog/product/cache/31a470d3411692d4c06a09bc75181cbc/6/3/630003_1.jpg"
    ]);
  }
)
.then(
  function(result){
    db.insert("picture", [
      "name",
      "url"
    ], [
      "Table de Ping-Pong",
      "https://www.celona.fr/2465-thickbox_default/table-de-ping-pong-beton-chris.jpg"
    ]);
  }
)
};

exports.down = function(db) {
  return db.dropTable('picture');
};

exports._meta = {
  "version": 1
};
