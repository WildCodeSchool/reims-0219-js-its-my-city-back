/* eslint-disable func-names */


let dbm;
// eslint-disable-next-line no-unused-vars
let type;
// eslint-disable-next-line no-unused-vars
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('grades', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    global_grade: { type: 'char', length: 50, notNull: true },
    accessibility: { type: 'char', length: 50, notNull: true },
    condition: { type: 'char', length: 50, notNull: true },
    functional: { type: 'char', length: 50, notNull: true },
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
        table: 'user',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { poi_id: 'id' },
      },
    },
  });
};

exports.down = function (db) {
  return db.dropTable('grades');
};

// eslint-disable-next-line no-underscore-dangle
exports._meta = {
  version: 1,
};
