const { Controller } = require("egg");

class JsController extends Controller {
  async getjslist() {
    const { ctx } = this;
    const $sql = `select * from js`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async deljslist() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `delete from js where id=? `;
    const $params = [id];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        meg: "删除成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        meg: "删除失败"
      };
    }
  }
  async addjslist() {
    const { ctx } = this;
    const { jsh } = ctx.request.body;
    const $sql = `insert into js (jsh)values(${jsh})`;
    const result = await this.app.mysql.query($sql);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        meg: "增加成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        meg: "增加失败"
      };
    }
  }
  async fenjslist() {
    const { ctx } = this;
    const { fen } = ctx.request.body;
    const $sql = `select * from js limit ?,?`;
    const $params = [fen * 1, 4];
    const result = await this.app.mysql.query($sql, $params);
    if (result.length) {
      ctx.body = {
        code: 1,
        result
      };
    } else {
      ctx.body = {
        code: 0
      };
    }
  }
}
module.exports = JsController;
