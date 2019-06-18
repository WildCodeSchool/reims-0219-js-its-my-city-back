const createNewPoi = `INSERT INTO point_of_interest (name, latitude, longitude, creation_date, author_id, picture_id) 
                      VALUES ('Poubelle', 49.0360, 4.0165, '2019-06-17', 1 , 6 )`;

const addNewPic = `INSERT INTO picture (name , url)
                   VALUES ('Poubelle', 'gfc')`;

module.exports = { createNewPoi, addNewPic };
