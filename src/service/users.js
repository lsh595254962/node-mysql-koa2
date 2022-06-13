/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 17:14:29
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 15:54:24
 * @Description:
 */
const User = require("../model/users");

class UserService {
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password });
    // 操作数据库
    return res.dataValues;
  }

  async getUserInfo(params) {
    const res = await User.findOne({
      attributes: ["id", "user_name", "is_admin", "password"],
      where: { ...params },
    });
    // 操作数据库
    return res ? res : null;
  }
  async updateById({ id, ...updateParams }) {
    console.log("updateParams", updateParams);
    console.log("id", id);
    const res = await User.update(updateParams, {
      where: {
        id,
      },
    });
    // 操作数据库
    return res[0];
  }
}

module.exports = new UserService();
