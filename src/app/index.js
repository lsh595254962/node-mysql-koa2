/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:30:04
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:24:58
 * @Description: Koa
 */
const Koa = require("koa");
const koaBody = require("koa-body");
const { allowedMethods } = require("../router");

// const userRouter = require("../router/users");
const router = require("../router");
const errHandler = require("./errHandler");

const app = new Koa();

app.use(koaBody());
// app.use(userRouter.routes());
app.use(router.routes()).use(router.allowedMethods());

app.on("error", errHandler);
module.exports = app;
