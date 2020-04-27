const express = require('express')
const app = express()
const hbs = require('express-hbs')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const mongoose = require('mongoose')
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

app.use(flash())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})


app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"))



app.use('/home', require('./routes/handlers').route)

app.use('/login', require('./routes/login').route)
app.use('/signup', require('./routes/signup').route)

// app.get('/', (req, res) => {
//     if (!req.user) {
//         return res.redirect('/login')
//     }
//     res.redirect('/home')
// })
// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/login');
// });



app.listen(5000, () => {
    console.log('started')
})