'use strict';
const {Controller} = require('egg');

class UserController extends Controller {
    async banner(){
        const {imgName} = this.ctx.request.body;
        
        const $sql = `select * from banner where  imgName=?`
        const $params = [imgName]

        const result = await this.app.mysql.query($sql,$params);
        
        if (result.length) {
			this.ctx.body = {
				code: 1,
				msg: '查询成功！',
				result
			};
		} else {
			this.ctx.body = {
				code: 0,
				msg: '暂无数据！'
			};
		}
    }
    
}

module.exports = UserController