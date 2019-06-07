const transformJson = datas => (
  datas.map(data => ({
    id: data.id,
    name: data.name,
    informations: data.informations,
    localisation: [
      data.latitude,
      data.longitude,
    ],
    author_id: data.author_id,
    picture_id: data.picture_id,
  }))
);

module.exports = transformJson;
