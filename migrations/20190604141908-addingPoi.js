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
    "Piscine Talleyrand",
    "https://www.google.fr/maps/place/Piscine+Talleyrand/@49.2568862,4.0251282,2672a,13.1y/data=!3m8!1e2!3m6!1sAF1QipMQLrYyc6u7Kvi9I9ExiNGsEYr02YM2PkLr1zbF!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMQLrYyc6u7Kvi9I9ExiNGsEYr02YM2PkLr1zbF%3Dw152-h86-k-no!7i1920!8i1080!4m5!3m4!1s0x47e975ab100d31f7:0xa405dd9732ffc3bf!8m2!3d49.2563223!4d4.0279531#"
  ])
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
