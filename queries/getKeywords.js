const getKeywords = 'SELECT k.id, k.name, k.importance, kh.keyword_parent as parent_id,  kh.keyword_children as children_id FROM keyword_hierarchy kh RIGHT JOIN keyword k ON kh.keyword_children = k.id;';

module.exports = getKeywords;
