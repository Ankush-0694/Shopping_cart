const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')

route.get('/', (req, res) => {
    if (!req.user) {
        return res.redirect('/login')
    }
    profile.findOne({
        username: req.user.username
    }).then((profile) => {
        if (profile == null) {
            return res.redirect('/createprofile')
        }
        res.render('home', {
            style: 'home.css',
            javascript: 'homeClient.js',
            title: 'homepage',
            layout: 'layouts/main',
            username: req.user._id
        })
    }).catch((err) => {
        console.log(err)
    })
})

route.get('/user', (req, res) => {
    console.log(req.user)
    res.send(req.user._id)
})

module.exports = {
    route
}