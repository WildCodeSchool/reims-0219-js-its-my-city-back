const transformPoiSampleJson = datas => (
  datas.map(data => ({
    id: data.id,
    name: data.name,
    author: data.author,
    picture_url: data.picurl,
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
    keywordName: data.keyword_name,
  }))
);

module.exports = transformPoiSampleJson;
