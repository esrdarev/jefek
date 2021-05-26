The back end of our website has started being developed.
This code sets up a functioning API server running on Node.js using Express. It then connects it locally to our PostgreSQL database.

Some security measures have been implemented: Express Helmet, rate limiting, compression and validation. Nevertheless, it is not recommended this go to production mode yet.

Things to be developed next sprint:

- Extra functions in the queries.js file for the back end interaction with our database
- Rules for the express-validator function
- Using encryption on emails and password fields using built-in PostgreSQL functionality

