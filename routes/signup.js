const route = require('express').Router()
const Users = require('../model/Users')
const passport = require('passport')
// const profile = require('../model/profile_model')

route.get('/', (req, res) => {
    res.render('newSignup', {
        style: 'signup.css'
    });
})
route.post('/', (req, res,next) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    new Users(newUser).save().then((user) => {
        console.log(user);
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next)
        // res.redirect('/login');
    }).catch((err) => {
        console.log(err)
        if (err.code === 11000) {
            res.render('newSignup', {
                message: 'Username or Email already exists',
                style: 'signup.css',
                javascript : 'signupClient.js'
            })
        }
    })
})

module.exports = {
    route
}