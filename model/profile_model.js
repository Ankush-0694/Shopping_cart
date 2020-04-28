const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String,
        default: 'JOHN'
    },
    lastName: {
        type: String,
        default: 'DOE'
    },
    gender: {
        type: String
    },
    profession: {
        type: String,
        default: 'berozgaari'
    },
    about: {
        type: String
    }
})

module.exports = mongoose.model('profiles', profileSchema)