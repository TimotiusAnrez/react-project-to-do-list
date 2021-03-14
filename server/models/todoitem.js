'use strict';
const { Sequelize } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TodoItem.init({
    item: {
      type:Sequelize.STRING,
      allowNull:false
    },
    isDone: {
      type:Sequelize.BOOLEAN,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'TodoItem',
  });
  return TodoItem;
};