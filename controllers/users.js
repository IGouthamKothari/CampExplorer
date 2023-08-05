<<<<<<< HEAD
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

module.exports.registerRedirect = (req, res) => {
    res.render('users/register');
}

module.exports.newUserRegister = catchAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
})

module.exports.loginRedirect =(req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    console.log("returning to....",req.session.returnTo);
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(req.user, err => {
        if(err) return next(err);
        req.flash('success', "Goodbye!");
        res.redirect('/campgrounds');
      });
=======
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

module.exports.registerRedirect = (req, res) => {
    res.render('users/register');
}

module.exports.newUserRegister = catchAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
})

module.exports.loginRedirect =(req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    console.log("returning to....",req.session.returnTo);
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(req.user, err => {
        if(err) return next(err);
        req.flash('success', "Goodbye!");
        res.redirect('/campgrounds');
      });
>>>>>>> 5074ef82788c70e0a5df2d5c4b8b7fc481ce8159
}