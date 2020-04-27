const express = require('express')
const route = express.Router()


route.get('/', (req, res) => {
    if (!req.user) {
        return res.redirect('/login')
    }
    res.render('home', {
        style: 'home.css',
        javascript: 'script1.js',
        title: 'homepage',
        layout: 'layouts/main'
    })
})


// route.get('/wishlist', async (req, res) => {

//     let userdata = await Users.findByPk(1)
//     userid = userdata.dataValues.id
//     console.log(userid)
//     // let item = wishlist.find


//     res.render('wishlist', {
//         heading: 'my wishlist',
//         para: 'my paragraph',
//         layout: 'layouts/main'
//     })
// })

// route.post('/wishlist', (req, res) => {
//     wishlist.create({
//         listId: req.body.listId,
//         item_name: req.body.name,
//         description: req.body.description,
//         img_url: req.body.img_url
//     })
//     res.redirect('/home/wishlist')
// })

// route.get('/user', (req, res) => {
//     console.log(req.user.id)
//     res.send(req.user.username)

// })

module.exports = {
    route
}