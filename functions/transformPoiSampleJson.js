const transformPoiSampleJson = datas => (
  datas.map(data => ({
    id: data.id,
    name: data.name,
    author: data.author,
    picture_url: data.url,
    creation_date: data.creation_date,
    localisation: [
      data.latitude,
      data.longitude,
    ],
    grades: {
      average: data.average,
      accessibility: data.accessibility,
      condition: data.condition,
      functional: data.functional,
    },
    keywordId: data.keyword_id,
  }))
);

module.exports = transformPoiSampleJson;
