
# BOOKSTORE-API

## Objective:
To build a RESTful API for managing a bookstore. The API should allow users to perform CRUD (Create, Read, Update, Delete) operations on books and authors. 
The project should use TypeScript for type safety, Express for the web framework, Express Validator for input validation, and PostgreSQL for the database.



## Run the project using following steps:

Install dependencies

```bash
 npm install express knex pg express-validator dotenv
npm install --save-dev typescript ts-node @types/node @types/express @types/express-validator @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-config-prettier eslint-plugin-prettier

```
Set up the Database:
Create the database tables for books and authors. Use Knex migrations for this.

```bash
npx knex init
```
Creating migration files:

```bash
npx knex migrate:make create_authors
npx knex migrate:make create_books
```
Install nodemon for development:

```bash
npm install --save-dev nodemon
```
Start the server:

```bash
npm run dev
```

    
## Test the API
Test the API using tools like Postman, Insomnia, or even directly in the browser with extensions like RESTClient.
### To test the API with Postman:
 1. Create a new request.

 2. Set the method (GET, POST, PUT, DELETE).

 3. Set the URL (e.g., http://localhost:3000/books).

 4. For POST and PUT requests, set the body to raw and choose JSON format. Provide the necessary JSON data.

 5. Send the request and observe the response.
