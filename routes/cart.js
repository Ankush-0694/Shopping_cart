const express = require('express')
const route = express.Router()


route.get('/', (req, res) => {
    res.render('cart', {
                style: 'cart.css',
                layout: 'layouts/main',
                javascript: 'cartClient.js',
                username: req.user.username
    })
})



module.exports = {
    route
}