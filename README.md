# PSU Masters Sample UI Integrated with API

- **Objective** - Implement a sample UI with CRUD backend

# For Backend Reference

- https://github.com/Christopher-Allen-21/psu-backend

# To Run

- Backend
  - **npm start** - navigate to server directory and run this
- Frontend
  - **ng serve** - navigate to client directory and run this

# Packages to install
- In Client Directory
  - **npm install -g @angular/cli** - install angular cli
  - **ng new "name of angular project"** - setup new angular project
  - **ng add @angular/material** - adds Angular Materials functionality
- In Server Directory
  - **npm install --save cors** - installs cors

# Code Walkthrough
- Chose Angular 19 for front end
- Reused most of the backend from previuos week's assignment. Added localhost to allowed origins for CORS
  - ![image](https://github.com/user-attachments/assets/613c0b85-1aa6-43f3-b955-8da2cf9a5057)
- Defined routes and associated components
  - ![image](https://github.com/user-attachments/assets/bf624516-f19d-4e9b-94c3-f6718b4c353e)
  - ![image](https://github.com/user-attachments/assets/2b69dc0c-b4ff-455e-8c77-213d649efb29)
  - ![image](https://github.com/user-attachments/assets/7c8f0b1c-dfef-4311-92cc-01e26b6fc193)
- Defined User model to match model in backend
  - ![image](https://github.com/user-attachments/assets/a25b5dcd-f944-4ca6-adc6-974159d398d1)
- Created table for displaying all users in db
  - ![image](https://github.com/user-attachments/assets/2b5f46c8-0671-43d7-a359-dac4be9148c8)
- Created tables for Creating and Updating Users
  - ![image](https://github.com/user-attachments/assets/7ca50de6-79c3-4388-9b14-91c25041946b)
  - ![image](https://github.com/user-attachments/assets/e712e305-dfd2-4c29-9781-ff9f0a27d345)
- CRUD Methods
  - GET
    - ![image](https://github.com/user-attachments/assets/840b0ce8-633d-4cff-803a-ed02f2348d94)
  - POST
    - ![image](https://github.com/user-attachments/assets/f07e0c7b-d592-4545-811a-2accac000580)
  - PUT
    - ![image](https://github.com/user-attachments/assets/3edbbcdc-c47a-495a-8c8c-eb918bee00e0)
  - DELETE
    - ![image](https://github.com/user-attachments/assets/9bb28f1c-beeb-4a8e-bfe2-00695c1ee89f)
- Social Media Login Integration
  - Added script for Google authentication
    - ![image](https://github.com/user-attachments/assets/b6f4f6af-5a0e-436d-82a1-39f762ff6286)
  - Added client id from Google API
    - ![image](https://github.com/user-attachments/assets/5f018b47-6b1b-43fa-a978-36ddc793e9b2)
  - Added html for Google log in
    - ![image](https://github.com/user-attachments/assets/9bc17733-3cc1-46f7-8c58-e5c56fbe89c3)

 
# Functionality Demo
- Routing
  - ![image](https://github.com/user-attachments/assets/4db840ec-27c2-42d9-87fe-7fa4fed0b13c)
  - ![image](https://github.com/user-attachments/assets/f0c315e8-0cf5-4bfa-a6fe-0e3d09d8200d)
  - ![image](https://github.com/user-attachments/assets/0d20cc15-a732-4718-957c-1dd380f3d07a)
- Get Users
  - ![image](https://github.com/user-attachments/assets/a5746fe9-5b33-4fd6-9cb5-4a0e44de6487)
  - ![image](https://github.com/user-attachments/assets/5e1ab7a6-13b3-4534-b7e3-be33cf50fc1f)
- Create User
  - ![image](https://github.com/user-attachments/assets/1a005e3a-1ff8-46fa-aee4-b070fc54e3d0)
  - ![image](https://github.com/user-attachments/assets/4f4bac75-91cc-4049-8a01-0d19e0915d9e)
  - ![image](https://github.com/user-attachments/assets/98848ebc-3ef4-461c-b838-6c4c96c58f51)
- Update User
  - ![image](https://github.com/user-attachments/assets/07bac187-e808-418e-8e40-2215e62b9195)
  - ![image](https://github.com/user-attachments/assets/7a5041a6-3345-4083-8a37-677efc07abb8)
  - ![image](https://github.com/user-attachments/assets/4d781277-ee10-46bf-90fb-66594b92772b)
- Delete User
  - ![image](https://github.com/user-attachments/assets/e8bb8848-4cb5-4e36-8e47-a2a3d76ce477)
  - ![image](https://github.com/user-attachments/assets/cc862449-06da-41db-ab3d-42297cfa7634)
- Social Media Login Integration
  -  ![image](https://github.com/user-attachments/assets/699fb071-f1b8-4e13-817b-629a42c925f2)
  -  ![image](https://github.com/user-attachments/assets/4ff45fda-efde-46fa-821e-d45241cc335c)
  -  ![image](https://github.com/user-attachments/assets/ea76d5cf-fdff-4526-8503-9832a7941689)
  -  ![image](https://github.com/user-attachments/assets/3b479b50-7ad3-454f-bfaf-32d9740d058a)






 
