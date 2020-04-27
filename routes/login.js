const route = require('express').Router()
const passport = require('passport')
route.get('/', (req, res) => {
    if (req.user) {
        return res.redirect('/home')
    }
    res.render('login')
})

route.post('/', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
})


module.exports = {
    route
}