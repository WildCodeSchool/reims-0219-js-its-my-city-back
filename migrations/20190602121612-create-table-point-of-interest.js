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
  return db.createTable('point_of_interest', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    informations: { type: 'char', length: 255 },
    localisation: { type: 'char', length: 100, notNull: true },
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
  });
};

exports.down = function (db) {
  return db.dropTable('pointofinterest');
};

// eslint-disable-next-line no-underscore-dangle
exports._meta = {
  version: 1,
};
