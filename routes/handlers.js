const express = require('express')
const route = express.Router()
const { db, Users } = require('../models/db')
const wishlist = require('../models/wishlist')


route.get('/', (req, res) => {
    res.render('home', {
        style: 'home.css',
        javascript: 'script1.js',
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

// route.post('/wishlist', (req, res) => {
//     wishlist.create({
//         listId: req.body.listId,
//         item_name: req.body.item_name,
//         description: req.body.description,
//         img_url: req.body.img_url
//     }).then(() => {
//         res.redirect('/wishlist')
//     }).catch((err) => {
//         if (err) throw err
//     })
// })
route.post('/wishlist', (req, res) => {
    wishlist.create({
        listId: req.body.listId,
        item_name: req.body.item_name,
        description: req.body.description,
        img_url: req.body.img_url
    })
    res.send('success')
})

route.get('/user', (req, res) => {
    res.send(req.user)
})

module.exports = {
    route
}