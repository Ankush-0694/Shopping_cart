const express = require('express')
const route = express.Router()
const profile = require('../model/profile_model')

route.get('/', (req, res) => {
    res.render('createProfile', {
        style: 'editProfile.css'
    })
})
route.post('/', (req, res) => {
    let data = {
        username: req.user.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        profession: req.body.profession,
        about: req.body.about
    }
    new profile(data).save().then((profile) => {
        console.log(profile)
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})
module.exports = {
    route
}