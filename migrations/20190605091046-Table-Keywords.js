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
  return db.createTable('keyword', {
    id: {
      type: 'int', primaryKey: true, autoIncrement: true, notNull: true,
    },
    name: { type: 'char', length: 80, notNull: true },
    importance: { type: 'int', notNull: true },
    informations: { type: 'char', length: 255 },
  })
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Sport & Loisirs',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Nature & Développement Durable',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Services Publics',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Vie Quotidienne',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Transports & Mobilité',
          '1',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Boulodrome',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Aire de jeux',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Maison de quartier',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Boîte à livres',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Instrument de musique',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Table de ping-pong',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'City stade',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Skatepark',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Terrain de foot',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Street workout',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Sport en groupe',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Terrain de basket',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parc',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Square',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Composteur',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Jardin partagé',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Incroyables Comestibles',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Aire de pique-nique',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Plan d\'eau',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Monuments',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Patrimoine historique',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Refuge animaux',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Dechetterie',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Toilettes',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Fontaines',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Commissariat',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Mairie',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'CRIJ',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Médiathèque',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Annexe mairie',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Mairie mobile',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Bibliobus',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Don du sang',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'CAF',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'CPAM',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Pôle emploi',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Office du tourisme',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Consigne automatique',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Container à verre',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Poubelles',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Boîte aux lettres',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Collecte de vêtements',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Distributeurs de billets',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Marché',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Canisette',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Poste',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Pharmacie',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Recharge de téléphone',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Nurserie',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Bains douches',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Médecine d\'urgence',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Hopital',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Conseil de quartier',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parking voiture',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Horodateur',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parking vélo et moto',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parking camping-car',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Aire de caravanes',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parking poids lourds',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Parking + tramway',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Station de gonflage',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Gare',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Arrêt de bus',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Arrêt de tramway',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Aire de covoiturage',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Station de taxis',
          '2',
          'horaires',
        ]);
      },
    )
    .then(
      (result) => {
        db.insert('keyword', [
          'name',
          'importance',
          'informations',
        ], [
          'Gare routière',
          '2',
          'horaires',
        ]);
      },
    );
};

exports.down = function (db) {
  return db.dropTable('keyword');
};

exports._meta = {
  version: 1,
};
