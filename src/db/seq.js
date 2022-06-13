/*
 * @Author: liushuaihao
 * @Date: 2022-05-21 11:51:45
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-21 14:29:27
 * @Description:
 */
const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_PROT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/default");

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("db success");
//   })
//   .catch((err) => {
//     console.log("db error", err);
//   });
module.exports = sequelize;
