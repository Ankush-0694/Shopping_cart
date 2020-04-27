const express = require('express')
const route = express.Router()
const w_item = require('../model/wishlist_item')


route.get('/', (req, res) => {
    res.render('wishlist', {
        heading: 'my wishlist',
        para: 'my paragraph',
        layout: 'layouts/main'
    })
})

route.post('/', (req, res) => {
    let data = {
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