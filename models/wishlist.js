const Sequelize = require('sequelize')
const { db, Users } = require('./db')

const wishlist = db.define('wishlist', {
    listId: {
        type: Sequelize.STRING(30),
        allowNULL: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING(30),
        allowNULL: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNULL: true,
    },
    img_url: {
        type: Sequelize.TEXT,
        allowNULL: true,
    }
})

wishlist.associate = (models) => {
    wishlist.belongsTo(models.Users, {
        foreignKey: {
            allowNULL: false
        }
    })
}

module.exports = {
    wishlist
}
