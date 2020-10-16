const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('./model/Users')

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/home"
  },


  function(accessToken, refreshToken, profile, cb) {
    Users.findOrCreate({ googleId: profile.id }, function (err, user) {
        // console.log(user);
      return cb(err, user);
    });
  }
));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// module.exports = {
//     passport
// }
