const { query } = require('../config/config')
module.exports.getUserlist = async ctx => {
    const $sql = `select * from user`;
    const result = await query($sql)
    ctx.body = {
        code: 1,
        result: result
    }
}
module.exports.addUser = async ctx => {
    const { username, password, address } = ctx.request.body;
    const $sql = `insert into user (username,password,address)values(?,?,?)`
    const $params = [username, password, address];
    const result = await query($sql, $params)
    if (result.affectedRows > 0) {
        ctx.body = {
            code: 1,
            msg: "插入成功"
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "插入失败"
        }
    }
}
module.exports.delUser = async ctx => {
    const { id } = ctx.request.body
    const $sql = `delete from user where id=? `
    const $params = [id];
    const result = await query($sql, $params)
    if (result.affectedRows > 0) {
        ctx.body = {
            code: 1,
            msg: "删除成功"
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "删除失败"
        }
    }
}
module.exports.editUser = async ctx => {
    const { username, password, address, id } = ctx.request.body;
    const $sql = `update user set username=?,password=?,address=? where id=?`;
    const $params = [username, password, address, id];
    const result = await query($sql, $params);
    if (result.affectedRows > 0) {
        ctx.body = {
            code: 1,
            msg: "更新成功",
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "更新失败",
        }
    }

}
module.exports.search = async ctx => {
    const { sea } = ctx.request.body
    const $sql = `select * from user where username like '%${sea}%'`
    // select * from user where username LIKE '%左家辉%'
    const $params = [sea]
    const result = await query($sql, $params)

    ctx.body = {
        code: 1,
        msg: "查询成功",
        result: result
    }
}

module.exports.fenye = async ctx => {
    const { pageSize = 0, pageCount = 2 } = ctx.request.query;
    const $sql = `select * from user limit ${pageSize} , ${pageCount}`
    const result = await query($sql);
    ctx.body = {
        code: 1,
        result: result
    }
}
