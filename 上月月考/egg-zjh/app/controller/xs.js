"use strict";
const Controller = require("egg").Controller;
class HomeController extends Controller {
  async getxslist() {
    const { ctx } = this;
    const $sql = `select * from xs`;
    const result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 1,
      result
    };
  }
  async addxslist() {
    const { ctx } = this;
    const { xm, xh, bj, js, mm } = ctx.request.body;
    const $sql = `insert into xs (xm,xh,bj,js,mm)values(?,?,?,?,?)`;
    const $params = [xm, xh, bj, js, mm];
    const result = await this.app.mysql.query($sql, $params);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        meg: "插入成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        meg: "插入失败"
      };
    }
  }
  async seaxslist() {
    const { ctx } = this;
    const { sea } = ctx.request.body;
    const $sql = `SELECT * FROM xs WHERE xm LIKE '%${sea}%'`;
    const result = await this.app.mysql.query($sql);
    if (result.length) {
      ctx.body = {
        code: 1,
        meg: "搜索成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        meg: "搜索失败"
      };
    }
  }
  async delxslist() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const $sql = `delete from xs where id=? `;
    // select * from xs where xm LIKE '%左家辉%'
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
module.exports = HomeController;
