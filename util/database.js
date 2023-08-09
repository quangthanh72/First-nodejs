const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "quang7204", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;