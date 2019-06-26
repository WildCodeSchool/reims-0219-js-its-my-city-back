const getFilteredPoiKeyKeyword1 = `SELECT 
p.name, 
p.latitude, 
p.longitude, 
p.creation_date, 
keyword.name AS firstImportanceKeyword, 
picture.url as picurl, 
user.name as author, 
grades.accessibility, 
grades.condition, 
grades.functional 
from point_of_interest p 
JOIN poi_keywords pk ON pk.poi_id=p.id 
JOIN keyword_hierarchy h ON h.keyword_children=pk.keyword_id 
JOIN keyword ON keyword.id=h.keyword_parent 
JOIN user ON p.author_id = user.id 
JOIN picture ON picture.id=p.picture_id 
LEFT JOIN grades ON grades.poi_id=p.id
WHERE keyword.name = ?;`;

module.exports = getFilteredPoiKeyKeyword1;
