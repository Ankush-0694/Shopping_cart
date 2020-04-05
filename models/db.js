const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/users.db'
})
const Users = db.define('Users', {
    username: {
        type: Sequelize.STRING(30),
        allowNULL: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(30),
        allowNULL: false,
    },
    email: {
        type: Sequelize.STRING(30),
        allowNULL: false,
    },

})
Users.associate = (models) => {
    Users.hasMany(models.wishlist, {
        onDelete: 'cascade'
    })
}
module.exports = {
    db, Users
}