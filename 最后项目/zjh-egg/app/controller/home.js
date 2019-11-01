"use strict";
const Controller = require("egg").Controller;
class HomeController extends Controller {
  async getbanner() {
    const { ctx } = this;
    const result = await ctx.service.home.getbanner(ctx.request.query);
    this.ctx.body = {
      code: 1,
      result
    };
  }
  async addbanner() {
    const { ctx } = this;
    const result = await ctx.service.home.addbanner(ctx.request.body);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        msg: "插入成功",
        result
      };
    } else {
      ctx.body = {
        code: 0
      };
    }
  }
  async delbanner() {
    const { ctx } = this;
    const result = await ctx.service.home.delbanner(ctx.request.body);
    if (result.affectedRows > 0) {
      ctx.status = 200;
      ctx.body = {
        code: 1,
        msg: "删除成功",
        result
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        code: 0,
        msg: "删除失败"
      };
    }
  }
  async editbanner() {
    const { ctx } = this;
    const result = await ctx.service.home.editbanner(ctx.request.body);
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 1,
        msg: "修改成功",
        result
      };
    } else {
      ctx.body = {
        code: 0,
        msg: "修改失败"
      };
    }
  }

  async gettabnav() {
    const { ctx } = this;
    const result = await ctx.service.home.gettabnav(ctx.request.query);
    ctx.body = {
      code: 1,
      msg: "查询成功",
      result
    };
  }
  async gettablist() {
    const { ctx } = this;
    const { type } = ctx.request.query;
    const $sql =
      type == undefined
        ? `select * from tabnav`
        : "select * from tabnav,tablist type where type=typeid and type=?";
    const result = await this.app.mysql.query($sql, [type]);
    ctx.body = {
      code: 1,
      msg: "查询成功",
      result
    };
  }
}

module.exports = HomeController;

//DELETE FROM `exam4`.`banner` WHERE  `id`=15;
