const express = require('express');
const router = express.Router();
const Users = require('../models/users');

const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    console.log('email and password cant be empty');
    res.json({ resp: 'email and password cant be empty' });
  } else {
    const findUser = Users.find({ login });
    findUser.exec((err, users) => {
      //jeśli nie ma w bazie:
      console.log(users);
      if (users.length === 0) {
        console.log('dodaj');
        bcrypt.hash(password, 10, function(err, hash) {
          const newUser = new Users({
            login,
            password: hash
          });
          newUser.save(err => {
            if (err) console.log(err);
            else res.json({ resp: 'created' });
          });
        });

        //jeśli jest mail w bazie
      } else {
        console.log('this mail is alredy in database');
        res.json({ resp: 'this mail is alredy in database' });
      }
    });
  }
  //zahaszowanie
});

module.exports = router;
