const linkNewlyCreatedPoiWithKeyword = `INSERT INTO poi_keywords 
SET 
keyword_id = (SELECT id from keyword WHERE name=?), 
?;`;


module.exports = { linkNewlyCreatedPoiWithKeyword };
