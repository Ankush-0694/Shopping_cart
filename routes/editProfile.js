const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')


route.get('/', (req, res) => {

    // profile.findOne({
    //     username: req.user.username
    // }).then((profile) => {
    //     if (profile === null) {
    //         let username = {
    //             username: req.user.username
    //         }
    //         new profile(username).save().then((profile) => {
    //             console.log(profile)
    //             res.render('editProfile', {
    //                 style: 'editProfile.css',
    //                 profile: profile
    //             })
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     }
    //     else {
    //         res.render('editProfile', {
    //             style: 'editProfile.css',
    //             profile: profile
    //         })
    //     }
    // })

    res.render('editProfile', {
        style: 'editProfile.css',
        profile: profile
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