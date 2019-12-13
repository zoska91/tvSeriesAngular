const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const bcrypt = require('bcrypt');

const config = require('../config');

router.post('/', (req, res) => {
  const { login, password } = req.body;

  console.log(login, password);

  Users.findOne({
    login: login
  }).then(user => {
    if (!user) {
      //jeśli nie ma takiego użytkownika
      console.log('we dont have this login in database');
      res.json({ resp: 'we dont have this login in database' });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          console.log(result);
          // jeśli dobre hasło przekieruj na profil
          req.session.profile = user;
          res.json({
            resp: 'correct',
            userId: user._id,
            login: user.login
          });
          console.log(req.session.profile);
        } else {
          // jeśli złe hasło
          res.json({ resp: 'wrong password' });
          console.log('wrong password');
        }
      });
    }
  });
});

module.exports = router;
