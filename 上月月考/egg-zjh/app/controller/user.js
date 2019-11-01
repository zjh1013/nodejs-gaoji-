const { Controller } = require("egg");
const md5 = require("md5");
class userController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const $sql = `select * from user`;
    const $params = [username, password];
    const result = await this.app.mysql.query($sql, $params);
    if (result) {
      const token = md5(
        JSON.stringify({
          header: {
            alg: "md5",
            typ: "jwt"
          },
          payload: {
            uid: result[0].id,
            tim: new Date().getTime()
          }
        })
      );
      ctx.session.userinfo = {
        token
      };
      ctx.body = {
        code: 1,
        result
      };
    } else {
      ctx.body = {
        code: 0
      };
    }
    // if (result) {
    //   //生成token
    //   const token = md5(
    //     JSON.stringify({
    //       header: {
    //         alg: "md5",
    //         typ: "jwt"
    //       },
    //       payload: {
    //         uid: result[0].id,
    //         tim: new Date().getTime()
    //       }
    //     })
    //   );
    //   //在服务器端缓存token
    //   ctx.session.userinfo = {
    //     token
    //   };
    //   //响应给前端
    //   ctx.body = {
    //     code: 1,
    //     token
    //   };
    // } else {
    //   ctx.body = {
    //     code: 0
    //   };
    // }
  }
}

module.exports = userController;
