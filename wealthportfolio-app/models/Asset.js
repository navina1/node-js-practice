// models/Asset.js
const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Asset = db.define('Asset', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Asset;
