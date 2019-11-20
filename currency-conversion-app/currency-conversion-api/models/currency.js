'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    currency1: DataTypes.STRING,
    currency2: DataTypes.STRING,
    rate: DataTypes.FLOAT
  }, {});
  Currency.associate = function(models) {
    // associations can be defined here
  };
  return Currency;
};