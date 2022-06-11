"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category, { foreignKey: "categoryId" });
      product.hasMany(models.review, { foreignKey: "productId" });
    }
  }
  product.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      rating: DataTypes.FLOAT,
      mainImage: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
