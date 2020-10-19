const express = require('express')
const route = express.Router()
const isAuthenticated = require('../config/auth').ensureAuthenticated;



route.get('/', isAuthenticated, (req, res) => {
    res.render('cart', {
                style: 'cart.css',
                layout: 'layouts/main',
                javascript: 'cartClient.js',
                username: req.user._id
    })
})



module.exports = {
    route
}