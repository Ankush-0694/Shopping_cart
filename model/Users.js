const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

// const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        // required: true,
        unique: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    googleId : {
        type: String
    }

});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model('Users', userSchema)