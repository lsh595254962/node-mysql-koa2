/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:36:52
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-06-13 16:38:37
 * @Description:
 */
const jwt = require("jsonwebtoken");
const { createUser, updateById } = require("../service/users");
const { userRegisterError } = require("../constant/err.type");
const { JWT_TOKEN } = require("../config/default");

class UserController {
  async test(ctx, next) {
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        ctx: ctx,
      },
    };
  }
  async register(ctx, next) {
    const { username, password } = ctx.request.body;
    // 提取数据 数据库查询 接口返回
    try {
      const res = await createUser(username, password);
      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }
  async login(ctx, next) {
    const { password, ...userInfo } = ctx.response.body;
    console.log("login", ctx.response.body);
    ctx.body = {
      code: 0,
      message: "用户登录成功",
      result: {
        token: jwt.sign(userInfo, JWT_TOKEN, { expiresIn: "1d" }),
      },
    };
  }
  async changePassword(ctx, next) {
    const { password } = ctx.request.body;
    const { id } = ctx.state.user;
    if (await updateById({ id, password })) {
      ctx.body = { code: 0, message: "更改密码成功" };
    } else {
      ctx.body = { code: 10007, message: "更改密码失败" };
    }
  }
}

module.exports = new UserController();
