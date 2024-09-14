//importing:
const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('./db.js');
//define table:
const userTable = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    id:{
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hashed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName:'users',
  },
);
module.exports = {userTable};