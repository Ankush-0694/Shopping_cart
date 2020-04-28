const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')


route.get('/', async (req, res) => {
    profile.findOne({ username: req.user.username }).then((profile) => {
        console.log(profile)
        res.render('profile', {
            style: 'profile.css',
            profile: profile
        })
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = {
    route
}