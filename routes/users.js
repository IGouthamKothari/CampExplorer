<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users');

router.route('/register')
    .get(users.registerRedirect)
    .post(users.newUserRegister);

router.route('/login')
    .get(users.loginRedirect )
    .post(passport.authenticate('local', 
{ 
    failureFlash: true, 
    failureRedirect: '/login', 
    keepSessionInfo: true
}), users.login);

router.get('/logout',users.logout )

=======
const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users');

router.route('/register')
    .get(users.registerRedirect)
    .post(users.newUserRegister);

router.route('/login')
    .get(users.loginRedirect )
    .post(passport.authenticate('local', 
{ 
    failureFlash: true, 
    failureRedirect: '/login', 
    keepSessionInfo: true
}), users.login);

router.get('/logout',users.logout )

>>>>>>> 5074ef82788c70e0a5df2d5c4b8b7fc481ce8159
module.exports = router;