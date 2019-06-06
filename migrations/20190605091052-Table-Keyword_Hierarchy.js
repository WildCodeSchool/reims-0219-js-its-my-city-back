

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
  return db.createTable('keyword_hierarchy', {
    keyword_parent: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithkf1_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_parent: 'id' },
      },
    },
    keyword_children: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithfk2_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword_children: 'id' },
      },
    },
  });
};

exports.down = function (db) {
  return db.dropTable('keyword_hierarchy');
};

exports._meta = {
  version: 1,
};
