const Sequelize = require('sequelize');
const sqOrm = require('../util/sequelize');


const userModel = sqOrm.define("userData", {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = userModel;