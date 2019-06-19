

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
  return db.createTable('picture', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    url: { type: 'text', notNull: true },
  })
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Piscine Talleyrand',
          'https://www.reims.fr/fileadmin/reims/MEDIA/Sports_et_loisirs/_Nouvelle_Arborescence/Piscines/Talleyrand/photo_talleyrand_05.png',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Skate Parc',
          'https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2017/07/05/le-skate-parc-un-projet-porte-par-les-jeunes.jpg?itok=6MCZjGIK',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Terrain de foot',
          'http://s1.lprs1.fr/images/2017/12/26/7471668_ffd7436e-e71e-11e7-9604-a8c9b65ef7a0-1_1000x625.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Table de Ping-Pong',
          'https://www.magequip.com/media/catalog/product/cache/31a470d3411692d4c06a09bc75181cbc/6/3/630003_1.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Table de Ping-Pong',
          'https://www.celona.fr/2465-thickbox_default/table-de-ping-pong-beton-chris.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Table de Ping-Pong',
          'https://www.celona.fr/2465-thickbox_default/table-de-ping-pong-beton-chris.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Jardin',
          'https://www.reims.fr/fileadmin/_processed_/a/9/csm_Jardin_d_horticulture_Reims_2_e8e6617b75.jpg',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('picture', [
          'name',
          'url',
        ], [
          'Parc',
          'https://www.reims.fr/fileadmin/_processed_/5/a/csm_Lac_6f58d49181.jpg',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('picture');
};

exports._meta = {
  version: 1,
};
