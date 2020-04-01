const express = require('express')
const app = express()
const hbs = require('express-hbs')
const route = require('./routes/handlers').route


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"))


app.use('/', require('./routes/handlers').route)




app.listen(5555, () => {
    console.log('server started')
})