const createNewPoi = `INSERT INTO point_of_interest SET
?,
creation_date = NOW(), 
author_id = ?, 
picture_id= ?;`;

module.exports = { createNewPoi };
