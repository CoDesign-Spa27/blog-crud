const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'posts',
  timestamps: true,  
});

module.exports = post;
