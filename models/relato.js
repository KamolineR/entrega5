'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relato.init({
    nome: DataTypes.STRING,
    local: DataTypes.STRING,
    data: DataTypes.DATE,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relato',
  });
  return Relato;
};