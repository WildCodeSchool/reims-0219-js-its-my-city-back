const getSamplePoisInfos = require('./getSamplePoisInfos');
const getSamplePoisInfosCriteria = require('./getSamplePoisInfosCriteria');


const getSamplePois = `${getSamplePoisInfos} WHERE keyword.name = 'Sport & Loisirs' ${getSamplePoisInfosCriteria} 
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Nature & Développement Durable' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Services Publics' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Vie Quotidienne' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Transports & Mobilité' ${getSamplePoisInfosCriteria});`;

module.exports = (getSamplePois);
