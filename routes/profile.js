const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')


route.get('/', async (req, res) => {
    profile.findOne({ username: req.user.username }).then((profile) => {
        console.log(profile)
        console.log(req.user)

        res.render('profile', {
            style: 'profile.css',
            profile: profile,
            user: req.user
        })
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = {
    route
}