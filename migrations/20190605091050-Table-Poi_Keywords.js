

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
  return  db.createTable('poi_keywords', {
    keyword_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'rank_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_id: 'id' },
      },
    },
    poi_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'rank_poi_fk',
        table: 'point_of_interest',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { poi_id: 'id' },
      },
    },
  })
  .then(
    function(result){
      db.insert("poi_keywords", [
        "keyword_id",
        "poi_id"
      ], [
        "1",
        "1"
      ]);
    }
  )
};

exports.down = function(db) {
  return db.dropTable("poi_keywords");
};

exports._meta = {
  "version": 1
};
