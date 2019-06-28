const insertGradesNewPoi = `INSERT INTO grades 
SET
?,
user_id=(SELECT id FROM user WHERE name=?), 
poi_id=(SELECT id FROM point_of_interest WHERE id=?);`;

module.exports = insertGradesNewPoi;
