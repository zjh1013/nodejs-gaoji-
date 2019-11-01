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

module.exports.tab = async ctx =>{
    const type = ctx.request.query.type;
	const $sql =
		type == undefined
			? `select * from tabnav`
			: 'select * from tabnav,tablist type where type=typeid and type=?';
	const results = await query($sql, [type]);
	ctx.body = {
		code: 1,
		msg: '查询成功！',
		result: results
	};
}
module.exports.tabs = async ctx =>{
    const type = ctx.request.query.type;
	const $sql =
		type == undefined
			? `select * from tablist`
			: 'select * from tablist,tabnav type where types=typeid and types=?';
	const results = await query($sql, [type]);
	ctx.body = {
		code: 1,
		msg: '查询成功！',
		result: results
	};
}

module.exports.addList = async ctx =>{
    const {pname , pimage , price ,desc,types} =ctx.request.body;
    const $sql = 'insert into tablist (pname , pimage , price ,`desc`,types)values(?,?,?,?,?)';
    const $params = [pname , pimage , price ,desc,types];
    const results = await query ($sql,$params);
    if(results.affectedRows > 0){
        ctx.body={
            code:1,
            msg:"插入成功"
        }
    }else{
        ctx.body={
            code:0,
            msg:"插入失败"
        }
    }
}