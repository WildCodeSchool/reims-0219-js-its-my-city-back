const getSamplePoisInfos = `SELECT p.*, 
user.name as 'user name', 
picture.url as picurl, 
pk.keyword_id,
keyword.name as keyword_name,
grades.accessibility, 
grades.condition, 
grades.functional, 
ROUND((grades.accessibility + grades.condition + grades.functional)/3) AS 'average 
grade' 
FROM point_of_interest p 
JOIN user on p.author_id = user.id 
JOIN picture on picture.id=p.picture_id 
LEFT JOIN grades on grades.poi_id = p.id 
JOIN poi_keywords pk on pk.poi_id=p.id
JOIN keyword on keyword.id=pk.keyword_id
ORDER BY RAND();`

module.exports = getSamplePoisInfos;
