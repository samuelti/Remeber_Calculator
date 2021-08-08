const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config.js');

class UsersCalculations extends Model {}

UsersCalculations.init(
  {
    id:{
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id:{
      type: DataTypes.INTEGER, 
      unique: 'compositeindex',
      refrences:{
        model: 'users',
        key: 'id'
      }
    },
    calculation_id:{
      type: DataTypes.INTEGER, 
      unique: 'compositeindex',
      refrences:{
        model: 'calculations',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users_calculations',
  }
);

module.exports = UsersCalculations;
