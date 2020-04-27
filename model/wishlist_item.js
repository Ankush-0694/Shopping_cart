const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    item_Id: {
        type: String
    },
    item_name: {
        type: String
    },
    item_description: {
        type: String
    },
    item_img_url: {
        type: String
    }
})
module.exports = mongoose.model('w_Items', wishlistSchema)

