const insertGradesNewPoi = `INSERT INTO grades 
SET
?,
user_id=?, 
poi_id=?;`;

module.exports = insertGradesNewPoi;
