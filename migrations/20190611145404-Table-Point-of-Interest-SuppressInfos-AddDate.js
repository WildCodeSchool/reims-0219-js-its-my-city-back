

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
  return db.removeColumn('point_of_interest', 'informations')
    .then(
      (result) => {
        db.addColumn('point_of_interest', 'creation_date', { type: 'datetime' });
      },
    );
};

exports.down = function (db) {
  return db.addColumn('point_of_interest', 'informations', {
    type: 'char', length: 255,
  })
    .then(
      (result) => {
        db.removeColumn('point_of_interest', 'creation_date');
      },
    );
};

exports._meta = {
  version: 1,
};
