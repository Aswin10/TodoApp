# TodoApp
/*
*----------------------------
* author: aswin castro
* created on: 6th july 2017
*----------------------------
**/

/*
*-----------------
* NODE AND MONGO
*-----------------

*   Install node js from official website
*   Install mongo db from official website
*   Check the above installed correctly
*   npm install
*   npm run start
**/

/*
*--------------
* DESCRIPTION:
*--------------
*   Nodejs REST api's, xmlHttpRequest, (http)GET,POST,PUT,DELETE
*   Database MongoDb
**/

/*
*-------------------
* FOLDER STRUCTURE:
*-------------------
*   server.js:
*       server.js consists of the imports and port that server needs to run
*   -> api 
*       -> controllers
*           -> appcontroller.js
*                controls the http request based on method such as get,post,etc
*       -> models
*           -> appmodel.js
*                consist of the model such as table structure eg:(task :{"name":"abc","id":"aef254fdsf4"})
*       -> routes
*           -> approutes.js
*               consist of the routes based on that data is communicated 
*                    eg: http://33.56.72.10:80/tasks
*                    this is a get call which requests the server(http://33.56.72.10) in port (80) 
*                    access the route named (/tasks) and fetches the data.
**/