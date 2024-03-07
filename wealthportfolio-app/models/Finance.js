// models/Finance.js
const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Finance = db.define('Finance', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    income: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    expenses: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    savings: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    financialYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Finance;
