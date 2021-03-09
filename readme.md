# A starter for all NodeJS + ExpressJS project

## package.json

you can uninstall all unneeded dependencies with `npm uninstall <dependencies name>`.

## steps

- first clone the repository inside your project folder.
- then rename it.
- type in shell `npm install`.
- you can delete all folder and file you will not use.

## scripts

- `npm run test`: run unit test with Jest in watch mode and coverage mode.
- `npm run dev`: run application in development mode with nodemon in watch mode.

## entry point
it's index.js in the root directories of your project.

---
## Dev Dependencies
### [Nodemon](https://www.npmjs.com/package/nodemon)
- Allows to run the script in watch mode. You don't need to run the program each time. Nodemon watch for changes in your code and when a change appears, it will run the script. 
### [Morgan](https://www.npmjs.com/package/morgan)
- HTTP request logger middleware for node.js
- tiny configuration
  - :method :url :status :res[content-length] - :response-time ms
### [Jest](https://www.npmjs.com/package/jest)
- Delightful JavaScript Testing
---
## Dependencies
### [Axios](https://www.npmjs.com/package/axios)
- Promise based HTTP client for the browser and node.js.
- used for all CRUD request on a REST API.

### [Body-Parser](https://www.npm.com/package/body-parser)
- Node.js body parsing middleware.

- Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
### [Cors](https://www.npmjs.com/package/cors)
- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
### [Dotenv](https://www.npmjs.com/package/dotenv)
- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- The .env file will be inserted inside .gitignore. And a .env.sample file will be push inside repo with example values. You will not share your configuration and sensible information on the web.
- Steps:  
  1. Verify before push that .env is in gitignore
  2. Put all environnement keys in .env
  3. DB_HOST is now accessible with `process.env.DB_HOST` (*example*)
### [Express](http://expressjs.com/en/5x/api.html)
- Fast, unopinionated, minimalist web framework for node.
### [Is-Empty](https://npmjs.com/package/is-empty)
- Check whether a value is empty.
### [Mongoose](https://mongoosejs.com/docs/guide.html)
- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
### [Validator](https://npmjs.com/package/validator)
- A library of string validators and sanitizers.

