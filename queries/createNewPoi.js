const createNewPoi = `INSERT INTO point_of_interest SET
?,
creation_date = NOW(), 
author_id = (SELECT id FROM user WHERE name=?), 
picture_id= (SELECT id from picture WHERE id=?);`;

module.exports = { createNewPoi };
