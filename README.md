# Description of our roads:

## Post : 

- The first Post '/' is here to insert datas:

  - The first query get informations to allow us to create a point of interest with its datas, a picture, and the name of the author.

  - The second query is here to insert informations during the creation of a new poi, and assign it to keywords. Thanks to it, users will be able to find this point of interest when submiting keywords.

  - Query insertGradesNewPoi is here to allow authors to submit grades, their names, and to aim the right poi when adding those information with resultId.poi_id. 

  - With the last query of this road, we complete the poi creation, and informations are sended to the front.

- The second Post '/picture' :

  - This post is here to allow authors to send a picture in the back, by transforming it in json and to store it in a folder with its Id (public/image/here)

## Get

  - The first Get '/sample/:latitude/:longitude' permit to launch a first sample when the application start. We get informations from the server, those informations are lattitude and longitude of every POI that we want to display.

  - The second "Get" query ('/keyword') matches to the information that are displayed when user touches a pin on its interface, a request is launched to the server to get information about this point of interest in particular.

  - The next one ('/filter/:keyword') query matches to every points of interest, parents and children.

  - The very last query is almost the same than the previous one, but only parents keyword are called.



