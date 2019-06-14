const getPoiInfosById = `SELECT p.id, 
p.name, 
p.creation_date, 
p.latitude, 
p.longitude, 
picture.url, 
picture.name, 
user.name AS author, 
grades.accessibility, 
grades.condition, 
grades.functional,
ROUND((grades.accessibility + grades.condition + grades.functional)/3) AS average
FROM point_of_interest p
JOIN picture ON picture.id=p.picture_id 
JOIN user ON user.id=p.author_id 
JOIN grades ON poi_id=p.id
WHERE p.id=?`;

module.exports = getPoiInfosById;
