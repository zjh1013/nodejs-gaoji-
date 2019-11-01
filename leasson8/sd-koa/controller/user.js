const {query} = require('../config/config')

module.exports.login = async ctx=>{
    const {username,password} = ctx.request.body;
    const $sql = `select * from user where username=? and password=?`
    const $params = [username,password]
    const results = await query($sql,$params)
    
    if(results.length){
        ctx.body={
            code:1,
            msg:"成功",
            results:results
        }
    }else{
        ctx.body={
            code:0,
            msg:"失败"
        }
    }


}
module.exports.registry = async ctx=>{
    const {username,password} = ctx.request.body;
    const $sql = `insert into user (username,password) values (?,?)`
    const $params = [username,password]
    const results = await query($sql,$params)
    
    
        ctx.body={
            code:1,
            msg:"成功注册",
        }
    
}