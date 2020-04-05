const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { db, Users } = require('./models/db')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    Users.findOne({
        where: {
            id: userId
        }
    }).then((user) => {
        done(null, user)
    }).catch((err) => {
        done(err)
    })
})


passport.use(new LocalStrategy((username, password, done) => {
    Users.findOne({
        where: {
            username: username
        }
    }).then((User) => {
        if (!User) {
            return done(null, false)
        }
        if (User.password != password) {
            return done(null, false)
        }

        done(null, User)
    }).catch((err) => {
        done(err)
    })
}))

module.exports = {
    passport
}