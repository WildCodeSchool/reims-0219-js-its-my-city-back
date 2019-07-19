# Wording

POI : Point Of Interest = a place on the map with latitude/longitude/description/category/picture

# Database

Database modelization available in the "resources" folder

# Description of our roads:

## Post : 

### Post '/'
 aims to add a new POI in the database and to be displayed on the map after the user filled in a dedicated form in the app

  - the connection.query createNewPoi insert the base data to allow us to create a POI with its datas, a picture, and the name of the author.

  - the connection.query linkNewlyCreatedPoiWithKeyword then insert informations during the creation of a new POI in order to assign it to keywords. Thanks to that, POI will be found through search/filter functionnalities of the app.

  - the connection.query insertGradesNewPoi is here to allow authors to submit grades, their type, and to link them to the right POI(with resultId.poi_id parameter) 

  - the connection.query  getPoiInfosById complete the POI creation, and transform the result of the query so that the JSON can be used to show the newly created POI on the map in the app.


  data sent will look like :
  ``` javascript
  {
              name: "Collecte de vêtements - Saint-Joseph",
              latitude:  49.2748, //defined by user map pin positionning
              longitude: 4.01728, //defined by user map pin positionning
              keyword: 47, //second level keyword id
              author_id: 1,
              global_grade: 4, //default
              accessibility: 5, //user input
              condition: 3, // user input
              functional: 4, //user input
            }
  ```

### Post '/picture' :

  This aims to get the picture of the newly created POI., 
  We use _formidable_ library to "transform" the picture date in json while storing the picture itself it in a folder with its Id (public/image/here).
  The link between the POI and the new image is done by storing the picture ID on creation, and reusing it inside the POI creation to reach the storage folder.

## Get

### Get '/sample/:latitude/:longitude'
 
 it allows get data from the database to display a first sample of two POI per theme (first level keywords) around the geolocated user when the application starts.
 the radius of the display zone is currently set at 3km/3000m in getSamplePoisInfosCriteria.js

 example : 'sample/49.2653016/4.0140353 will get something like :

 ``` javascript
 {
        "id": 23,
        "name": "Table de ping-pong - Charles Arnould",
        "author": "Wilder",
        "picture_url": "Default_Picture.webp",
        "firstImportanceKeyword": "Sport & Loisirs",
        "creation_date": "2019-06-17T22:00:00.000Z",
        "localisation": [
            49.2646,
            4.01292
        ],
        "grades": {
            "average": 5,
            "accessibility": 5,
            "condition": 5,
            "functional": 5
        },
        "keywordId": 11
    },
    {
        "id": 19,
        "name": "Table de ping-pong - Quartier Libre",
        "author": "Wilder",
        "picture_url": "Default_Picture.webp",
        "firstImportanceKeyword": "Sport & Loisirs",
        "creation_date": "2019-06-17T22:00:00.000Z",
        "localisation": [
            49.257,
            4.01972
        ],
        "grades": {
            "average": 2,
            "accessibility": 1,
            "condition": 2,
            "functional": 3
        },
        "keywordId": 11
    },
...
]
```


### Get '/keyword'

it gets all the keywords data registered inside the database.

### Get '/filter/:keyword'

it allows to get data of every POI linked with a specified second level keyword (category).


### Get 'filterKeyword1/:keyword'

it allows to get date of every POI linked with a specified first level keyword (theme)


# Migrations

We used dbmigrate to create and manage test date in our database

