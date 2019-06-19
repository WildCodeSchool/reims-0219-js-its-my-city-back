const getSamplePoisInfos = require('./getSamplePoisInfos');
const getSamplePoisInfosCriteria = require('./getSamplePoisInfosCriteria');


const getSamplePois =
`${getSamplePoisInfos} WHERE keyword.name = 'Sport' ${getSamplePoisInfosCriteria} 
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Nature' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Attraction' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Monument' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Utilitaire' ${getSamplePoisInfosCriteria})
  UNION (${getSamplePoisInfos} WHERE keyword.name = 'Hygiène' ${getSamplePoisInfosCriteria});`;

module.exports = (getSamplePois);
