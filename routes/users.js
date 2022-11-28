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

module.exports = router;