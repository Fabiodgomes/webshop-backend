"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "johndoe@gmail.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex Dumont",
          email: "alexdumont@gmail.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
