/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:25:00
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:20:57
 * @Description: 路由自动加载
 */
const Router = require("koa-router");
const fs = require("fs");
const router = new Router();

console.log(1);
fs.readdirSync(__dirname).forEach((file) => {
  if (file != "index.js") {
    let r = require("./" + file);
    router.use(r.routes());
  }
});
module.exports = router;
