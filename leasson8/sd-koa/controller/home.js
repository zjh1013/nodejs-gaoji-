const { query } = require('../config/config')


module.exports.list = async ctx => {
    const $sql = `select * from list`;
    const results = await query($sql)
    if (results.length) {
        ctx.body = {
            code: 1,
            msg: "成功",
            results: results
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "失败",
        }
    }
}


