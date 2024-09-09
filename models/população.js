'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class População extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  População.init({
    nm: DataTypes.STRING,
    senha: DataTypes.INTEGER,
    cpf: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'População',
  });
  return População;
};