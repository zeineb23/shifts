const { TIME } = require("sequelize");
const Sequelize = require("sequelize");

const db = require("../configuration/database.js");

const shift = db.define("shift", {
  id_shift: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  shift_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  end: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  icon: {
    type: Sequelize.BLOB,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});
module.exports = shift;
