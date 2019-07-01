const createNewPicture = `INSERT INTO picture SET 
name=?,
url=?;`;

module.exports = { createNewPicture };
