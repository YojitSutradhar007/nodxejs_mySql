const sqDb = require('../util/sequelize');
const Sequelize = require('sequelize');

const productModel = sqDb.define('newProducts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


module.exports = productModel;