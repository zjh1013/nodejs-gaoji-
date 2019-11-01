const { Controller } = require("egg");

class HomeController extends Controller {
  async details() {
    const { ctx } = this;
    // const params = ctx.request.body;
    // const result = await ctx.service.home.details(ctx.request.body);

    // SELECT 列名1,列名2... FROM 表1 INNER JOIN 表2 ON 表1.外键=表2.主键 WhERE 条件语句;

    // select user.*,orders.* from user,orders where user.id=orders.id;

    const { id } = ctx.request.body;
    const $sql = `select * from content,liebiao where liebiao.id=content.listid and liebiao.id=${id}`;

    const result = await this.app.mysql.query($sql);
    if (result) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async addp() {
    const { ctx } = this;
    const { inner, listid } = ctx.request.body;

    const $sql = "INSERT INTO`content` (`inner`, `listid`) VALUES (?,?)";
    const $params = [inner, listid];
    const result = await this.app.mysql.query($sql, $params);

    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async addw() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    const $sql = "INSERT INTO liebiao (`title`, `content`) VALUES (?,?)";
    const $params = [title, content];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
  async getl() {
    const { ctx } = this;
    const $sql = `select * from liebiao`;
    const result = await this.app.mysql.query($sql);
    if (result) {
      ctx.body = {
        code: 1,
        result
      };
    }
  }
}
module.exports = HomeController;
