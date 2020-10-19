const express = require('express')
const route = express.Router()
const w_item = require('../model/wishlist_item')
const isAuthenticated = require('../config/auth').ensureAuthenticated;



route.get('/',isAuthenticated, (req, res) => {
    res.render('wishlist', {
                style: 'wishlist.css',
                layout: 'layouts/main',
                javascript: 'wishlistClient.js',
                username: req.user._id
    })
})
module.exports = {
    route
}