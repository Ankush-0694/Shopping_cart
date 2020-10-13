const route = require('express').Router()
const Users = require('../model/Users')
// const profile = require('../model/profile_model')

route.get('/', (req, res) => {
    res.render('signup', {
        style: 'signup.css'
    });
})
route.post('/', (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    new Users(newUser).save().then((user) => {
        console.log(user);
        res.redirect('/login');
    }).catch((err) => {
        console.log(err)
        if (err.code === 11000) {
            res.render('signup', {
                message: 'Username already exists',
                style: 'signup.css'
            })
        }
    })
})

module.exports = {
    route
}