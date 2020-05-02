const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')


route.get('/', (req, res) => {
    profile.findOne({ username: req.user.username }).then((profile) => {
        res.render('editProfile', {
            style: 'editProfile.css',
            profile: profile
        })
    }).catch((err) => {
        console.log(err)
    })

})

route.post('/', (req, res) => {
    profile.findOne({
        username: req.user.username
    }).then((profile) => {
        profile.firstName = req.body.firstName
        profile.lastName = req.body.lastName
        profile.gender = req.body.gender
        profile.profession = req.body.profession
        profile.about = req.body.about

        profile.save().then((profile) => {
            res.redirect('/profile')
        })
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = {
    route
}