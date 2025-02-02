# PSU Masters Sample Backend/API

- **Objective** - Implementat a sample API using Express, MongoDb, and Swagger

# To Run

- Once respository is cloned locally, user can run either of these commands:
  - **node index.js** - runs server locally; will need to stop, save, and re-run when modifying
  - **npm start** - runs server locally; automatically re-runs after saving

# NPM packages to install

- **npm init -y** - setup new project and creates package.json
- **npm install express** - installs express
- **npm i mongoose** - installs install mongoose
- **npm i dotenv** - installs dotenv for environment variables
- **npm install --save-dev nodemon** - installs nodemon
- **npm install yamljs** - installs yaml
- **npm install swagger-ui-express** - installs swagger UI

# Additional Resources

- Tutorial to setup Express and MongoDb
  - youtube.com/watch?v=30p9QfybWZg/
- Mongoose queries
  - https://www.geeksforgeeks.org/mongoose-queries/

# Code Walkthrough

- index.js
  - ![image](https://github.com/user-attachments/assets/3d9e227f-cb58-4dd8-96dc-fbf9c5f54f13)
    - The required libraries needed for Express, MongoDb, and Swagger
    - Initializing express and using .env file for setting the port and mongodb url
    - Setting up swagger for "/api-docs" endpoint
    - Connecting to mongodb and using the PORT from env
  - ![image](https://github.com/user-attachments/assets/5b212a68-06bb-492a-926a-2e664f748f1a)
    -  GET endpoints
    -  "/" returns a welcome message
    -  "/users" returns all users with 200 response or 500 response if there is server error
    -  "/users/:id/" returns one user based on id with 200 response, 404 if user cannot be found, or 500 if there is a server error
  - ![image](https://github.com/user-attachments/assets/50b6237d-3964-4ae8-b80a-0690923ead5f)
    -  POST endpoint
    -  "/users" creates a new user with 201, 400 if the body fails validation, or 500 if there is server error
  - ![image](https://github.com/user-attachments/assets/31418e23-53a3-4a56-b5f8-cd1ffdc23eae)
    -  PUT endpoint
    -  "/users/:id" updates an existing user with 200 response, 404 if user cannot be found, 400 if the body fails validation, or 500 if there is a server error
  - ![image](https://github.com/user-attachments/assets/2703cc9b-7d75-424b-8553-602ac1a8eb69)
    -  DELETE endpoint
    -  "/users/:id" deletes an existing user with 200 response, 404 if user cannot be found, or 500 if there is a server error
- user.js
  - ![image](https://github.com/user-attachments/assets/e98b74e4-7a67-4647-8610-b932d6b85c80)
    - Defines the user schema
    - Makes certain fields required
- swagger.yaml
  - ![image](https://github.com/user-attachments/assets/3d62324c-ce5f-4773-aec9-238a2327c89f)
    - Defines how Swagger UI will appear
      


