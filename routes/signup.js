const route = require('express').Router()
const Users = require('../model/Users')
route.get('/', (req, res) => {
    res.render('signup')
})
route.post('/', (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.username,
        password: req.body.password
    }
    new Users(newUser).save().then((user) => {
        console.log(user)
        res.redirect('/login')
    }).catch((err) => {
        console.log(err)
        if (err.code === 11000) {
            res.render('signup', {
                message: 'Username already exists'
            })
        }
    })
})

module.exports = {
    route
}