/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */


let dbm;
let type;
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
    password: { type: 'char', length: 150, notNull: true },
  })
    .then(
      (result) => {
        db.insert('user', ['name', 'password'], ['D4rkNinj@51100', 'password']);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('user');
};

exports._meta = {
  version: 1,
};
