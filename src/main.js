/*
 * @Author: liushuaihao
 * @Date: 2022-05-20 11:35:06
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-21 11:58:52
 * @Description:
 */
const { APP_PORT } = require("./config/default");

const app = require("./app");

app.listen(APP_PORT, () => {
  console.log(`server is running in http://localhost:${APP_PORT}`);
});
