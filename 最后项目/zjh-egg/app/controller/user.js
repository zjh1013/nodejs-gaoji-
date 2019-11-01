const { Controller } = require('egg')

class userController extends Controller {
    async login() {
        const { ctx } = this;
        const { username, mima } = ctx.request.body;
        const $sql = `select * from user where username=? and mima=?`
        const $params = [username, mima]
        const result = await this.app.mysql.query($sql, $params)
        ctx.body = {
            code: 1,
            result
        }
    }
    async registry() {
        const { ctx } = this;
        const { username, mima } = ctx.request.body;
        const $sql = `insert into user (username , mima)values(?,?)`
        const $params = [username, mima]
        const result = await this.app.mysql.query($sql, $params)
        if (result.affectedRows > 0) {
            ctx.body = {
                code: 1,
                result
            }
        } else {
            ctx.body = {
                code: 0
            }
        }

    }
}
module.exports = userController