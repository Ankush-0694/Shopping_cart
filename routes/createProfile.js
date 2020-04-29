const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')


route.get('/', (req, res) => {
    let username = {
        username: req.user.username
    }
    new profile(username).save().then((profile) => {
        console.log(profile)
        res.render('createProfile', {
            style: 'createProfile.css',
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
        profile.username = req.user.username
        profile.firstName = req.body.firstName
        profile.lastName = req.body.lastName
        profile.gender = req.body.gender
        profile.profession = req.body.profession
        profile.about = req.body.about

        profile.save().then((profile) => {
            console.log(profile)
            res.redirect('/profile')
        })
    }).catch((err) => {
        console.log(err)
    })

    // username: req.user.username,
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     gender: req.body.gender,
    //     profession: req.body.profession,
    //     about: req.body.about
    // new profile(data).save().then((profile) => {
    //     res.redirect('/profile')
    // }).catch((err) => {
    //     console.log(err)
    // })
})

module.exports = {
    route
}