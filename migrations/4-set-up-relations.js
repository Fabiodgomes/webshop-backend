"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "categoryId");
  },
};
