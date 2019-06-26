// beginning of request string to get sample POI
const getSamplePoisInfos = `(SELECT p.*, 
user.name as 'author', 
picture.url as picurl, 
pk.keyword_id,
keyword.name AS firstImportanceKeyword, 
grades.accessibility, 
grades.condition, 
grades.functional, 
ROUND((grades.accessibility + grades.condition + grades.functional)/3) AS 'average',
(6371000 * acos (cos ( radians(?) )*cos( radians( p.latitude ) )*cos( radians( p.longitude )
-radians(?) )+sin ( radians(?) )* sin( radians( latitude ) )) ) AS distance
FROM point_of_interest p 
JOIN user on p.author_id = user.id 
JOIN picture on picture.id=p.picture_id 
LEFT JOIN grades on grades.poi_id = p.id 
JOIN poi_keywords pk on pk.poi_id=p.id
JOIN keyword_hierarchy h ON h.keyword_children=pk.keyword_id 
JOIN keyword ON keyword.id=h.keyword_parent`;

module.exports = getSamplePoisInfos;
