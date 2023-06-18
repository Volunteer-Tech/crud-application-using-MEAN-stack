const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../model/User');

// api to add user
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
  .then(user => {
    res.status(200).json({'status': 'success','mssg': 'user added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get users
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','users': users});
    }
  });
});

// api to edit user
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','user': user});
    }
  });
});

// api to update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone_number = req.body.phone_number;

        user.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = userRoutes;