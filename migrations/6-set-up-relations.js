"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("reviews", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE ",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("reviews", "productId");
  },
};
