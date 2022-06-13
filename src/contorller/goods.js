/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:36:52
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:09:27
 * @Description:
 */
// const { createUser, updateById } = require("../service/goods");
const { userRegisterError } = require("../constant/err.type");

class UserController {
  async upload(ctx, next) {
    ctx.body = "图片上传成功";
  }
}

module.exports = new UserController();
