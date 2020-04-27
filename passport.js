const passport = require('passport')
const Users = require('./model/Users')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) => {
    Users.findOne({
        username: username
    }).then((User) => {
        if (!User) {
            return done(null, false)
        }
        if (Users.password != password) {
            return done(null, false)
        }
        return done(null, User)
    }).catch((err) => {
        done(err)
    })
}))

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


module.exports = {
    passport
}