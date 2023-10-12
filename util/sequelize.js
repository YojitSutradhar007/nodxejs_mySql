const sequelize = require('sequelize');

const database = new sequelize('node_complete', 'root', 'suthar123', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = database;