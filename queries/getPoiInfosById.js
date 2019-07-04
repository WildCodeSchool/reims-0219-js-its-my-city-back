const getPoiInfosById = `SELECT p.*,  
user.name as 'author',  
picture.url as picurl,  
pk.keyword_id, 
k.name as keyword_name, 
K.name as firstImportanceKeyword, 
grades.accessibility,  
grades.condition,  
grades.functional,  
ROUND((grades.accessibility + grades.condition + grades.functional)/3) AS 'average'  
FROM point_of_interest p  
JOIN user ON p.author_id = user.id  
JOIN picture ON picture.id=p.picture_id
  LEFT JOIN grades on grades.poi_id = p.id
    JOIN poi_keywords pk on pk.poi_id=p.id
     JOIN keyword_hierarchy h ON h.keyword_children=pk.keyword_id 
     JOIN keyword k ON k.id=h.keyword_children
     JOIN keyword K ON K.id=h.keyword_parent 
     WHERE p.id=?`;

module.exports = getPoiInfosById;
