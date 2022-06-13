/*
 * @Author: liushuaihao
 * @Date: 2022-05-21 16:15:58
 * @LastEditors: liushuaihao
 * @LastEditTime: 2022-05-21 16:18:10
 * @Description: 
 */
module.exports = (err, ctx) => {
  let status = 500;
  switch (err.code) {
    case "10001":
      status = 400;
      break;
    case "10002":
      status = 409;
      break;
    default:
      status = 500;
      break;
  }
  ctx.status = status
  ctx.body = err

};
