const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/config.js');

class Calculations extends Model {}

Calculations.init(
  {
    id:{
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    calc_content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    calc_called:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'calculations',
  }
);

module.exports = Calculations;
