const express = require('express')
const app = express()
const hbs = require('express-hbs')
const { db, Users } = require('./models/db')
const wishlist = require('./models/wishlist')
const session = require('express-session')
const passport = require('passport')
require('./passport')


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'hashashashashashashashashashashash',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"))



app.use('/home', require('./routes/handlers').route)

app.use('/login', require('./routes/login').route)
app.use('/signup', require('./routes/signup').route)

app.get('/', (req, res) => {
    if (!req.user) {
        return res.redirect('/login')
    }
    res.redirect('/home')
})
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});


db.sync().then(() => {
    app.listen(5555, () => {
        console.log('started')
    })
})