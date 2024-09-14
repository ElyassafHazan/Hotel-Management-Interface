Welcome to "Hotel Management Application" V0.0.1!

Important: this project is NOT production-level functional and still missing some key features.

Current Features:

1.FRONT-END: html,css,js. providing such functionality:
  a. register and login pages as well an index.html that contains the user/admin panel.
  b. password/username/email length and validity authentication.
  c. via js files: sending 'fetch' HTTP POST requests to the backend server and recieving response using JSON.

2.BACK-END: running on node.js server with 'express', with a mysql database, providing such functionality:
   a. Registration features:
     -recieving HTTP requests with user credentials from the front end using 'body-parser' and JSON.
     -hashing passwords using 'bcrypt' module.
     -inserting user credentials into DB using 'Sequelize' module.
     -returning response codes/messages to the front end.
   b.Login features:
     -recieving HTTP requests with user credentials from the front end using 'body-parser' and JSON
     -authenticating log-in requests using the 'bcrypt.compare' method.
     -checking DB for the existance of such user.

How to initialize the application on your device:
  REQUIREMENTS:
    1.node.js
    2.MYQL database
    3.Install the required npm packages (using the command: 'npm -i' in the application's main directory).
  
  Steps:
  1.create a MYQL database of your choice. Make sure it is an empty database.
  2.configure all the variables inside 'config.js' that's located inside the main directory. That should be the only file you need to configure/make changes to.
  3.launch! using the command 'node server.js' from the main directory.
  4.it should work now! 
   

