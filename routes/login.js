const route = require('express').Router()
const passport = require('passport')//this is npm module not the filename
route.get('/', (req, res) => {
    if (req.user) {
        return res.redirect('/')
    }

    res.render('newLogin', {
        style: 'login.css'
    })
})

route.post('/', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
})


module.exports = {
    route
}