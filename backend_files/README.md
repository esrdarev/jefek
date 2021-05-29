This is the skeleton of the back end of our website.
This code sets up a functioning API server running on Node.js using Express. It then connects it locally to our PostgreSQL database.

Some security measures have been implemented: Express Helmet, rate limiting, compression and validation. Nevertheless, it is not recommended this go to production mode yet.

To set it up on an Ubuntu OS, npm should be used, through the command:
npm run.

Things to be developed next sprint:

- Extra functions in the queries.js file for the back end interaction with our database
- Rules for the express-validator function
- Using encryption on emails and password fields using built-in PostgreSQL functionality

