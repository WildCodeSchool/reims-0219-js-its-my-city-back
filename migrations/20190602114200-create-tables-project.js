/* eslint-disable no-unused-vars */
/* eslint-disable func-names */


let dbm;
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
  return db.createTable('user', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    password: { type: 'int', notNull: true },
  });
};

exports.down = function (db) {
  return db.dropTable('user');
};

// eslint-disable-next-line no-underscore-dangle
exports._meta = {
  version: 1,
};
