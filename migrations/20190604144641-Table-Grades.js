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
  return  db.createTable('grades', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    global_grade: { type: 'float', length: 11, notNull: true },
    accessibility: { type: 'int', length: 11, notNull: true },
    condition: { type: 'int', length: 11, notNull: true },
    functional: { type: 'int', length: 11, notNull: true },
    user_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'grades_user_fk',
        table: 'user',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { user_id: 'id' },
      },
    },
    poi_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'grades_poi_fk',
        table: 'point_of_interest',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { poi_id: 'id' },
      },
    },
  })
    .then(
      function(result) {
        db.insert("grades", [
          "global_grade",
          "accessibility",
          "condition",
          "functional",
          "user_id",
          "poi_id",
        ], [
          "4",
          "4",
          "3",
          "3",
          "1",
          "1",
        ]);
      },
    )
  
  
  
};

exports.down = function(db) {
  return db.dropTable('grades');
};

exports._meta = {
  "version": 1,
};
