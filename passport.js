const passport = require('passport')
const User = require('./model/Users')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) => {
    // console.log(username)
    User.findOne({
        username: username
    }).then((user) => {

        if (!user) {

            return done(null, false, {
                message: "Invalid Username"
            })
        }
        if (user.password != password) {
            return done(null, false, {
                message: "Wrong Password"
            })
        }
        // console.log(User)

        return done(null, user)
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