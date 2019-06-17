const createNewPoi = `INSERT INTO point_of_interest (name, latitude, longitude, creation_date, author_id, picture_id) 
                      VALUES ('Parc', 49.0358, 4.0158, '2019-06-17', 1 , 8 )`;

const addNewPic = `INSERT INTO picture (name , url)
                   VALUES ('Parc', 'abc')`;

module.exports = { createNewPoi, addNewPic };
