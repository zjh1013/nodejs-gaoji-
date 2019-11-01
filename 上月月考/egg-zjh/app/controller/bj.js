const { Controller } = require("egg");

class BjController extends Controller {
  async getbjlist() {
    const { ctx } = this;
    const $sql = `select * from bj`;
    const result = await this.app.mysql.query($sql);
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
  async addbjlist() {
    const { ctx } = this;
    const { bjm, kcm, jsh } = ctx.request.body;
    const $sql = `insert into bj (bjm,kcm,jsh)values(?,?,?)`;
    const $params = [bjm, kcm, jsh];
    const result = await this.app.mysql.query($sql, $params);
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
  async editbjlist() {
    const { ctx } = this;
    const { bjm, kcm, jsh, id } = ctx.request.body.data;
    const $sql = `UPDATE bj SET bjm=?, kcm=?, jsh=? WHERE  id=?`;
    const $params = [bjm, kcm, jsh, id];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        meg: "编辑成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        meg: "编辑失败"
      };
    }
  }
  async delbjlist() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `delete from bj where id=? `;
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
}

module.exports = BjController;
