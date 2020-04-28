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

route.get('/user', (req, res) => {
    console.log(req.user)
    res.send(req.user.username)

})

module.exports = {
    route
}