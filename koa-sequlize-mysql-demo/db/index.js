const Sequelize = require('sequelize');
const dbConf = require('../config/db')
module.exports = new Sequelize(dbConf.name, dbConf.username, dbConf.password, dbConf.option);