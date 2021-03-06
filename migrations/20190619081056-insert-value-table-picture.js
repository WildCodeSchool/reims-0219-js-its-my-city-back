

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
  return db.insert('picture', [
    'name',
    'url',
  ], ['standard picture',
    'https://i.vimeocdn.com/portrait/10549664_300x300.webp',
  ]);
};

exports.down = function (db) {
  return db.delete('picture', [
    'name',
    'url',
  ], ['standard picture',
    'https://i.vimeocdn.com/portrait/10549664_300x300.webp',
  ]);
};

exports._meta = {
  version: 1,
};
