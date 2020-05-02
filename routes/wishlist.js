const express = require('express')
const route = express.Router()
const w_item = require('../model/wishlist_item')


route.get('/', (req, res) => {
    w_item.find({
        username: req.user.username
    }).then((items) => {
        res.render('wishlist', {
            style: 'wishlist.css',
            layout: 'layouts/main',
            products: items
        })
    }).catch((err) => {
        console.log(err)
    })
})

route.post('/', (req, res) => {
    let data = {
        username: req.user.username,
        item_Id: req.body.item_Id,
        item_name: req.body.item_name,
        item_description: req.body.item_description,
        item_img_url: req.body.item_img_url
    }
    new w_item(data).save().then((item) => {
        console.log(item)
        res.send('added')
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = {
    route
}