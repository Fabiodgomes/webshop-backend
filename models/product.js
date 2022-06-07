"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.category, { foreignKey: "categoryId" });
    }
  }
  products.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      rating: DataTypes.FLOAT,
      mainImage: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
