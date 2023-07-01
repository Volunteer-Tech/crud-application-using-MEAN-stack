# MEAN-Stack Simple CRUD Application -  Angular + Node/Express + MongoDB + Bootstrap 

> This code will add, update and delete data to mongodb using express rest APIS and frontend through Angular 7. Angular Code is in main directory and backend code is in backend directory of main directory

### Prerequisites
Below listed things you need to have in your system to run this code

```
- Node.js
- NPM
- Angular CLI 
- MongoDB
- Use nvm install 8 & nvm use 8
```

### To Setup
Clone or download this repository

1. `cd MEAN-Stack-CRUD`
2. `npm install`
3. `cd MEAN-Stack/backend`
4. `npm install`

### To Run
As you already install node_modules in both backend server and angular now have to run all three mongoDB, node/express server and angular.

start mongodb in your system

to run node server
1. `cd MEAN-Stack/backend`
2. `nodemon app.js`

to run angular frontend
1. `cd MEAN-Stack`
2. `ng serve -o`
3. `docker-compose --env-file ./backend/.env up`

### To add user
http://localhost:4200/user/create

### To edit and delete user
http://localhost:4200/user


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
