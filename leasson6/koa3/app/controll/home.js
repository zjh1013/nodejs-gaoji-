const { query } = require('../config/index')
module.exports.banner = async ctx => {
    const $sql = `select * from banner`
    const results = await query($sql)
    if (results.length) {
        ctx.body = {
            code: 1,
            msg: "成功!!",
            results: results
        }
    } else {
        ctx.body = {
            code: 0,
            mes: "失败!!"
        }
    }
}

module.exports.nav = async ctx => {
    const $sql = `select * from nav`
    const results = await query($sql)//返回来的数据
    if (results.length) {
        ctx.body = {
            code: 1,
            msg: "成功找到数据!!!",
            results: results
        }
    } else {
        ctx.body = {
            code: 1,
            msg: "没有找到数据!!!"
        }
    }
}