const express = require('express')
const app = express()
const hbs = require('express-hbs')


app.engine('hbs', hbs.express4({
    partialDir: __dirname + '/views/partials'
}))


app.set('view engine', 'hbs')



app.get('/wishlist', (req, res) => {
    res.render('wishlist', {
        heading: 'my wishlist',
        para: 'my paragraph',
        layout: 'layouts/main'
    })
})

app.use('/', express.static('homepage'))

app.listen(5555, () => {
    console.log('server started')
})