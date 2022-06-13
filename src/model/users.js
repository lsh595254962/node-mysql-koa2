/*
 * @Author: liushuaihao
 * @Date: 2022-05-21 14:30:06
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 15:18:31
 * @Description: 创建数据表
 */
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Users = seq.define(
  "User",
  {
    // 在这里定义模型属性
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名, 唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0-否 1-是",
    },
  },
  {
    // 这是其他模型参数
  }
);

// 创建表
// User.sync({ force: true });
// console.log("用户模型表刚刚(重新)创建！");
module.exports = Users;
