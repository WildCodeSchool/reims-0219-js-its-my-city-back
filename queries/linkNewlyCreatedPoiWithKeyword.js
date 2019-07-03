const linkNewlyCreatedPoiWithKeyword = `INSERT INTO poi_keywords 
SET 
keyword_id = ?, 
?;`;


module.exports = { linkNewlyCreatedPoiWithKeyword };
