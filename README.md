# PSU Masters Sample Final Project - Front End

- **Objective** - To design, develop, and deploy a project that demonstrates skills and knowledge of web development

# Link to Site

- https://chrisallen1996.com/workout

# To Run

- **ng serve** - run this in root directory

# Packages to Install

- **npm install -g @angular/cli** - install angular cli
- **ng new "name of angular project"** - setup new angular project
- **ng add @angular/material** - adds Angular Materials functionality
- **npm i --save rxjs** - adds RXJS
- **ng add @ngrx/store@latest** - add ngrx
- **ng add @ngrx/store-devtools@latest** - adds ngrx devtools

# Deployment Steps using AWS Amplify

- Setup new Amplify app

  - Navigate to AWS Amplify
  - Click on "Create new app
  - ![image](https://github.com/user-attachments/assets/e743977d-2490-4bb5-87b7-8d89c7fd78c3)
  - Select GitHub
  - ![image](https://github.com/user-attachments/assets/25106892-51c5-41e3-9f2c-23ebe40e1d1b)
  - Select the Repository and branch
  - ![image](https://github.com/user-attachments/assets/88efa338-c890-4399-bb6c-f79493fee727)
  - Update YML file so that it uses correct version of node and update baseDirectory
  - ![image](https://github.com/user-attachments/assets/ec9e3f08-8837-4b66-a595-e88c1d08c5b2)
  - Confirm everything looks good and then click "Save and deploy"
  - ![image](https://github.com/user-attachments/assets/446782b9-fefd-4829-a84d-48dd24af13df)

- Build

  - Build and deploy details can be found here
  - ![image](https://github.com/user-attachments/assets/03879743-ee53-44a1-aa64-28861dcfe3d9)
  - Every time a Main branch is updated a new deploy automatically kicks off
  - ![image](https://github.com/user-attachments/assets/401cea68-1db1-47e1-b2ab-0a5cc4ac0c92)

- Monitoring

  - Different monitoring metrics can be seen here
  - ![image](https://github.com/user-attachments/assets/df6e139f-0602-48c0-9b1c-30613507136f)

- Deploy
  - In Overview section you can see associated domains
  - ![image](https://github.com/user-attachments/assets/2934f30c-97c2-4317-bb44-9e945b1d4a1f)
  - Upon clicking the domain I can see my front-end is deployed
  - ![image](https://github.com/user-attachments/assets/e1a95a73-32d3-4616-9d41-7f8b8a1f728c)
