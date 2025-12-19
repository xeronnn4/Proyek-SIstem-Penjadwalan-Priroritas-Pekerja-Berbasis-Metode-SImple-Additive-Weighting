const Sequelize = require('sequelize');

// Kita pakai SQLite supaya tidak perlu install XAMPP
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // File database akan disimpan disini
    logging: false // Mematikan log teknis biar terminal bersih
});

module.exports = sequelize;