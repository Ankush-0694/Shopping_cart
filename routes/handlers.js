const express = require('express')
const route = express.Router()

route.get('/home', (req, res) => {
    res.render('home', {
        style: 'home.css',
        title: 'homepage',
        layout: 'layouts/main'
    })
})
route.get('/wishlist', (req, res) => {
    res.render('wishlist', {
        heading: 'my wishlist',
        para: 'my paragraph',
        layout: 'layouts/main'
    })
})

module.exports = {
    route
}