"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.product, { foreignKey: "categoryId" }); // define association here
    }
  }
  categories.init(
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "categories",
    }
  );
  return categories;
};
