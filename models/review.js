"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.product, { foreignKey: "productId" }); // define association here
    }
  }
  review.init(
    {
      // name: { type: DataTypes.STRING, allowNull: false },
      // email: { type: DataTypes.STRING, allowNull: false, unique:true },
      // date: { type: DataTypes.INTEGER, allowNull: false },
      review: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
