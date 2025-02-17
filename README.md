# PSU Masters Sample Software Testing

- **Objective** - Implement testing for both the front and backend

# For Frontend / Backend Reference

- https://github.com/Christopher-Allen-21/psu-backend
- https://github.com/Christopher-Allen-21/psu-frontend

# To Run

- Backend
  - **npm start** - navigate to server directory and run this
- Frontend
  - **ng serve** - navigate to client directory and run this

# Packages to Install

- In Server Directory
  - **npm i jest --save-dev** - Install Jest
  - **npm install supertest --save-dev** - Install Supertest
- In Client Directory
  - **tbd** - tbd

# Code Walkthrough

- **Backend Testing**

  - Chose to use Jest and Supertest for testing express routes
  - Added script in package.json for running the tests. Use "jest --coverage" in order to see line, branch, etc. coverage
  - ![image](https://github.com/user-attachments/assets/b80eb813-9398-4d8f-ad25-5d7715390a49)
  - Created test files for each route/model
  - Mock data
    - ![image](https://github.com/user-attachments/assets/7f926f8c-c567-4510-801c-a68072952a02)
  - Test GET
    - Describing each test. Includes happy path and error handling tests
    - ![image](https://github.com/user-attachments/assets/58be0723-7a97-42f9-af4a-219112f413ce)
  - Test POST
    - Describing each test. Includes happy path and error handling tests
    - ![image](https://github.com/user-attachments/assets/e57f9fe3-1558-4e16-b564-aa109f72d27e)
  - Test PUT
    - Describing each test. Includes happy path and error handling tests
    - ![image](https://github.com/user-attachments/assets/be2a45cb-9e14-4c2d-8de2-f4a9ca507206)
  - Test DELETE
    - Describing each test. Includes happy path and error handling tests
    - ![image](https://github.com/user-attachments/assets/39801e66-0242-4596-9c8b-ddde03a0b709)

- **Frontend Testing**

# Functionality Demo

- **Backend**

  - Use **npm test** to run Jest test cases
  - Running test cases. Have 5 test files with 46 tests. Overall line coverage is over 80% across the board
    - ![image](https://github.com/user-attachments/assets/1c86dac7-d077-4c3a-9a72-f6524c872f01)

- **Frontend**
  - Use **ng test --code-coverage** to run unit tests with code coverage
