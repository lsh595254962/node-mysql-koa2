/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:22:40
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-06-13 16:36:49
 * @Description: koa-router
 */
const Router = require("koa-router");
const { test, register, login, changePassword } = require("../contorller/users");
const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
  auth,
} = require("../middleware/users");
const router = new Router({ prefix: "/users" });

router.get("/test", test);

router.post("/register", userValidator, verifyUser, cryptPassword, register);

router.post("/login", userValidator, verifyLogin, login);

router.patch("/changePassword", auth, cryptPassword, changePassword);

module.exports = router;
