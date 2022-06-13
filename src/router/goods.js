/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 15:22:40
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-22 16:38:12
 * @Description: koa-router
 */
const Router = require("koa-router");
const { upload } = require("../contorller/goods");
const { auth, hasAdminpPermission } = require("../middleware/users");
const router = new Router({ prefix: "/goods" });

router.post("/upload", auth, hasAdminpPermission, upload);

module.exports = router;
