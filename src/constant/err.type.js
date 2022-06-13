/*
 * @Author: liushuaihao
 * @Date: 2022-05-21 16:10:31
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:36:18
 * @Description: error 常量收集
 */
module.exports = {
  userFormateError: {
    code: 10001,
    message: "用户名和密码不能为空",
    reslut: "",
  },
  userAlreadyExists: {
    code: 10002,
    message: "用户名已存在",
    reslut: "",
  },
  userRegisterError: {
    code: 10003,
    message: "注册后台系统错误",
    reslut: "",
  },
  userDoesNotExists: {
    code: 10004,
    message: "用户不存在",
    reslut: "",
  },
  userLoginError: {
    code: 10005,
    message: "登录后台系统错误",
    reslut: "",
  },
  userPasswordInvalid: {
    code: 10005,
    message: "密码不正确",
    reslut: "",
  },
  jsonWebTokenError: {
    code: 10101,
    message: "token error",
    reslut: "",
  },
  TokenExpiredError: {
    code: 10102,
    message: "token expired",
    reslut: "",
  },
  notAdminpPermission: {
    code: 10103,
    message: "not adminp permission",
    reslut: "",
  },
  
};
