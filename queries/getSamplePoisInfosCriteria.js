// beginning of request string to get sample POI
const getSamplePoisInfosCriteria = `
HAVING distance < 3000
ORDER BY p.id DESC
LIMIT 2)`;

module.exports = getSamplePoisInfosCriteria;
