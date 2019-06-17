const createNewPoi = `
INSERT INTO point_of_interest (name, latitude, longitude, creation_date, author_id, picture_id) 
       VALUES ('Parc', 49.0358, 4.0158, '03.08.18', 1, 4)`;

module.exports = createNewPoi;
