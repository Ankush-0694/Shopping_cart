const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String
    },
    profession: {
        type: String
    },
    about: {
        type: String
    }
})

module.exports = mongoose.model('profiles', profileSchema)