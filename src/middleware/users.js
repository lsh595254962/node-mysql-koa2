/*
 * @Author: liushuaihao
 * @Date: 2022-05-21 15:35:47
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:46:42
 * @Description: 用户信息校验中间件
 */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../config/default");
const { getUserInfo } = require("../service/users");
const {
  userFormateError,
  userAlreadyExists,
  userRegisterError,
  userDoesNotExists,
  userPasswordInvalid,
  userLoginError,
  jsonWebTokenError,
  TokenExpiredError,
  notAdminpPermission
} = require("../constant/err.type");
// 数据校验
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
 
  // 合法性
  if (!username || !password) {
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};
const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body;
  // 合理性
  if (username) {
    try {
      const res = await getUserInfo({ user_name: username });
      if (res) {
        console.error("用户名已存在", { username });
        ctx.app.emit("error", userAlreadyExists, ctx);
        return;
      }
    } catch (error) {
      console.error("获取用户信息错误", err);
      ctx.app.emit("error", userRegisterError, ctx);
      return;
    }
  }
  await next();
};
const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};
// 验证登录信息
const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  // 1、用户是否存在 2、密码是否正确
  try {
    const res = await getUserInfo({ user_name: username });
    console.log('getUserInfo',res);
    if (!res) {
      return ctx.app.emit("error", userDoesNotExists, ctx);
    } else if (!bcrypt.compareSync(password, res.password)) {
      return ctx.app.emit("error", userPasswordInvalid, ctx);
    } else {
      ctx.response.body = res.dataValues;
    }
  } catch (error) {
    console.log(error);
    return ctx.app.emit("error", userLoginError, ctx);
  }
  await next();
};
const auth = async (ctx, next) => {
  const { token } = ctx.request.header;
  console.log('token',token);
  try {
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJfbmFtZSI6ImFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTY1MzIwOTIxOSwiZXhwIjoxNjUzMjk1NjE5fQ.Y5Dd1sQrC8NXj42TkRZaiUVezcekHIb8kfBTbjfXePs
    const user = jwt.verify(token, JWT_TOKEN);
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case "JsonWebTokenError":
        return ctx.app.emit("error", jsonWebTokenError, ctx);
      case "TokenExpiredError":
        return ctx.app.emit("error", TokenExpiredError, ctx);
      default:
        break;
    }
  }
  await next();
};
const hasAdminpPermission = async (ctx, next) => {
  console.log('ctx.state.user',ctx.state.user);
  const { is_admin } = ctx.state.user;
  if (!is_admin) {
    return ctx.app.emit("error", notAdminpPermission, ctx);
  }
  await next();
};

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
  auth,
  hasAdminpPermission
};
