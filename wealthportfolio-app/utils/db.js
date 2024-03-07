// utils/db.js
const { Sequelize } = require('sequelize');
const config = require('../config');

const { host, username, password, database } = config.database;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

module.exports = sequelize;
