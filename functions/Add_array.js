const addArray = datas => (
  datas.map(data => ({
    ...data,
    id: data.id,
    name: data.name,
    informations: data.informations,
    localisation: [
      data.latitude,
      data.longitude,
    ],
    author: data.author,
    url: data.url,
  }))
);

module.exports = addArray;
